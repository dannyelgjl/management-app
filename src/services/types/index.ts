export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE';

export interface PaginationMeta {
  total: number;
  limit: number;
  offset: number;
  hasNext: boolean;
}

export interface ApiEnvelope<T> {
  data: T;
  meta?: PaginationMeta;
}

export interface ApiErrorEnvelope {
  error?: {
    code?: string;
    message?: string;
    details?: unknown;
  };
}

export interface Team {
  id: string;
  name: string;
  colorHex: string;
  description?: string | null;
  tasksCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  dueDate?: string | null;
  teams: Team[];
  createdAt: string;
  updatedAt: string;
}

export interface TaskFilters {
  teamId?: string;
  status?: TaskStatus;
  search?: string;
  limit?: number;
  offset?: number;
  sort?: string;
}

export interface TaskPayload {
  title: string;
  description?: string;
  status?: TaskStatus;
  dueDate?: string | null;
  teamIds?: string[];
}

export interface TeamPayload {
  name: string;
  colorHex: string;
  description?: string;
}
