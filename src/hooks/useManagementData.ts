import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { listTeams } from '../services/teams';
import {
  createTask,
  deleteTask,
  getTask,
  listTasks,
  updateTask,
  updateTaskStatus,
} from '../services/tasks';
import { queryKeys } from '../services/queryKeys';
import { TaskFilters, TaskPayload, TaskStatus } from '../services/types';

export function useTeams() {
  return useQuery({
    queryKey: queryKeys.teams,
    queryFn: () => listTeams(),
  });
}

export function useTasks(filters: TaskFilters) {
  return useQuery({
    queryKey: queryKeys.tasks(filters),
    queryFn: () => listTasks(filters),
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

  return useMutation({
    mutationFn: (payload: TaskPayload) => createTask(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useUpdateTask(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: TaskPayload) => updateTask(taskId, payload),
    onSuccess: (task) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.task(task.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useUpdateTaskStatus(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (status: TaskStatus) => updateTaskStatus(taskId, status),
    onSuccess: (task) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.task(task.id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}

export function useDeleteTask(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.teams });
    },
  });
}
