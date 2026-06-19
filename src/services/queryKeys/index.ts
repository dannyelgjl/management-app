import { TaskFilters } from '../types';

export const queryKeys = {
  teams: ['teams'] as const,
  tasks: (filters: TaskFilters) => ['tasks', filters] as const,
  task: (taskId: string) => ['task', taskId] as const,
};
