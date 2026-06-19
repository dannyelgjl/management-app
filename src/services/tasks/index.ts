import { api } from '../api';
import { ApiEnvelope, Task, TaskFilters, TaskPayload, TaskStatus } from '../types';

export async function listTasks(filters: TaskFilters) {
  const response = await api.get<ApiEnvelope<Task[]>>('/tasks', {
    params: {
      limit: filters.limit ?? 20,
      offset: filters.offset ?? 0,
      sort: filters.sort ?? 'createdAt:desc',
      teamId: filters.teamId,
      status: filters.status,
      search: filters.search || undefined,
    },
  });

  return response.data;
}

export async function getTask(taskId: string) {
  const response = await api.get<ApiEnvelope<Task>>(`/tasks/${taskId}`);

  return response.data.data;
}

export async function createTask(payload: TaskPayload) {
  const response = await api.post<ApiEnvelope<Task>>('/tasks', payload);

  return response.data.data;
}

export async function updateTask(taskId: string, payload: TaskPayload) {
  const response = await api.put<ApiEnvelope<Task>>(`/tasks/${taskId}`, payload);

  return response.data.data;
}

export async function updateTaskStatus(taskId: string, status: TaskStatus) {
  const response = await api.patch<ApiEnvelope<Task>>(`/tasks/${taskId}/status`, {
    status,
  });

  return response.data.data;
}

export async function deleteTask(taskId: string) {
  const response = await api.delete<ApiEnvelope<Task>>(`/tasks/${taskId}`);

  return response.data.data;
}
