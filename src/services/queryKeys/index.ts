import { TaskFilters } from '../types';

export const queryKeys = {
  team: (teamId: string) => ['team', teamId] as const,
  teams: ['teams'] as const,
  infiniteTasks: (filters: TaskFilters) => ['tasks', 'infinite', filters] as const,
  tasks: (filters: TaskFilters) => ['tasks', filters] as const,
  task: (taskId: string) => ['task', taskId] as const,
};

export const mutationKeys = {
  createTeam: ['teams', 'create'] as const,
  createTask: ['tasks', 'create'] as const,
  deleteTeam: ['teams', 'delete'] as const,
  deleteTask: ['tasks', 'delete'] as const,
  updateTeam: ['teams', 'update'] as const,
  updateTask: ['tasks', 'update'] as const,
  updateTaskStatus: ['tasks', 'status'] as const,
};
