import { TaskPayload, TaskStatus, TeamPayload } from '../services/types';

export interface DeleteTaskVariables {
  taskId: string;
}

export interface DeleteTeamVariables {
  teamId: string;
}

export interface UpdateTeamVariables {
  payload: TeamPayload;
  teamId: string;
}

export interface UpdateTaskVariables {
  payload: TaskPayload;
  taskId: string;
}

export interface UpdateTaskStatusVariables {
  status: TaskStatus;
  taskId: string;
}
