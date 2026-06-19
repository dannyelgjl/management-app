import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import {
  createTeam,
  deleteTeam,
  getTeam,
  listTeams,
  updateTeam,
} from '../services/teams';
import {
  createTask,
  deleteTask,
  getTask,
  listTasks,
  updateTask,
  updateTaskStatus,
} from '../services/tasks';
import { mutationKeys, queryKeys } from '../services/queryKeys';
import {
  Task,
  TaskFilters,
  TaskPayload,
  Team,
  TeamPayload,
} from '../services/types';
import type {
  DeleteTaskVariables,
  DeleteTeamVariables,
  UpdateTaskStatusVariables,
  UpdateTaskVariables,
  UpdateTeamVariables,
} from './types';

export function useTeams() {
  return useQuery({
    queryKey: queryKeys.teams,
    queryFn: () => listTeams(),
  });
}

export function useTeam(teamId?: string) {
  return useQuery({
    queryKey: queryKeys.team(teamId ?? ''),
    queryFn: () => getTeam(teamId ?? ''),
    enabled: Boolean(teamId),
  });
}

export function useCreateTeam() {
  const queryClient = useQueryClient();

  return useMutation<Team, Error, TeamPayload>({
    mutationKey: mutationKeys.createTeam,
    mutationFn: createTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useUpdateTeam(teamId: string) {
  const queryClient = useQueryClient();

  return useMutation<Team, Error, UpdateTeamVariables>({
    mutationKey: [...mutationKeys.updateTeam, teamId],
    mutationFn: ({ payload, teamId: mutationTeamId }) =>
      updateTeam(mutationTeamId, payload),
    onSuccess: (team) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
      queryClient.invalidateQueries({ queryKey: queryKeys.team(team.id) });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useDeleteTeam(teamId: string) {
  const queryClient = useQueryClient();

  return useMutation<Team, Error, DeleteTeamVariables>({
    mutationKey: [...mutationKeys.deleteTeam, teamId],
    mutationFn: ({ teamId: mutationTeamId }) => deleteTeam(mutationTeamId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useTasks(filters: TaskFilters) {
  return useQuery({
    queryKey: queryKeys.tasks(filters),
    queryFn: () => listTasks(filters),
  });
}

export function useInfiniteTasks(filters: TaskFilters) {
  return useInfiniteQuery({
    queryKey: queryKeys.infiniteTasks(filters),
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      listTasks({
        ...filters,
        offset: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.meta?.hasNext) {
        return undefined;
      }

      return lastPage.meta.offset + lastPage.meta.limit;
    },
  });
}

export function useTask(taskId?: string) {
  return useQuery({
    queryKey: queryKeys.task(taskId ?? ''),
    queryFn: () => getTask(taskId ?? ''),
    enabled: Boolean(taskId),
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation<Task, Error, TaskPayload>({
    mutationKey: mutationKeys.createTask,
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useUpdateTask(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation<Task, Error, UpdateTaskVariables>({
    mutationKey: [...mutationKeys.updateTask, taskId],
    mutationFn: ({ payload, taskId: mutationTaskId }) =>
      updateTask(mutationTaskId, payload),
    onSuccess: (task) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.task(task.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useUpdateTaskStatus(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation<Task, Error, UpdateTaskStatusVariables>({
    mutationKey: [...mutationKeys.updateTaskStatus, taskId],
    mutationFn: ({ status, taskId: mutationTaskId }) =>
      updateTaskStatus(mutationTaskId, status),
    onSuccess: (task) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.task(task.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useDeleteTask(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation<Task, Error, DeleteTaskVariables>({
    mutationKey: [...mutationKeys.deleteTask, taskId],
    mutationFn: ({ taskId: mutationTaskId }) => deleteTask(mutationTaskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}
