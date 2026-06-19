import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { QueryClient, onlineManager } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import type { PersistQueryClientOptions } from '@tanstack/react-query-persist-client';

import {
  createTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
} from '../services/tasks';
import { createTeam, deleteTeam, updateTeam } from '../services/teams';
import { mutationKeys, queryKeys } from '../services/queryKeys';
import { Task, TaskPayload, Team, TeamPayload } from '../services/types';
import type {
  DeleteTaskVariables,
  DeleteTeamVariables,
  UpdateTaskStatusVariables,
  UpdateTaskVariables,
  UpdateTeamVariables,
} from '../hooks/types';

const OFFLINE_CACHE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: OFFLINE_CACHE_MAX_AGE,
      networkMode: 'offlineFirst',
      retry: 1,
      staleTime: 30_000,
    },
    mutations: {
      gcTime: OFFLINE_CACHE_MAX_AGE,
      networkMode: 'online',
      retry: 3,
    },
  },
});

queryClient.setMutationDefaults<Task, Error, TaskPayload>(mutationKeys.createTask, {
  mutationFn: createTask,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] });
    queryClient.invalidateQueries({ queryKey: queryKeys.teams });
  },
});

queryClient.setMutationDefaults<Team, Error, TeamPayload>(mutationKeys.createTeam, {
  mutationFn: createTeam,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.teams });
  },
});

queryClient.setMutationDefaults<Team, Error, UpdateTeamVariables>(
  mutationKeys.updateTeam,
  {
    mutationFn: ({ payload, teamId }) => updateTeam(teamId, payload),
    onSuccess: (team) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
      queryClient.invalidateQueries({ queryKey: queryKeys.team(team.id) });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  },
);

queryClient.setMutationDefaults<Team, Error, DeleteTeamVariables>(
  mutationKeys.deleteTeam,
  {
    mutationFn: ({ teamId }) => deleteTeam(teamId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  },
);

queryClient.setMutationDefaults<Task, Error, UpdateTaskVariables>(
  mutationKeys.updateTask,
  {
    mutationFn: ({ payload, taskId }) => updateTask(taskId, payload),
    onSuccess: (task) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.task(task.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  },
);

queryClient.setMutationDefaults<Task, Error, UpdateTaskStatusVariables>(
  mutationKeys.updateTaskStatus,
  {
    mutationFn: ({ status, taskId }) => updateTaskStatus(taskId, status),
    onSuccess: (task) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.task(task.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  },
);

queryClient.setMutationDefaults<Task, Error, DeleteTaskVariables>(
  mutationKeys.deleteTask,
  {
    mutationFn: ({ taskId }) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  },
);

export const asyncStoragePersister = createAsyncStoragePersister({
  key: 'MANAGEMENT_APP_QUERY_CACHE',
  storage: AsyncStorage,
  throttleTime: 1000,
});

export const persistOptions: Omit<PersistQueryClientOptions, 'queryClient'> = {
  maxAge: OFFLINE_CACHE_MAX_AGE,
  persister: asyncStoragePersister,
};

let didSetupOnlineManager = false;

export function setupOnlineManager() {
  if (didSetupOnlineManager) {
    return;
  }

  didSetupOnlineManager = true;

  onlineManager.setEventListener((setOnline) =>
    NetInfo.addEventListener((state) => {
      setOnline(Boolean(state.isConnected && state.isInternetReachable !== false));
    }),
  );
}
