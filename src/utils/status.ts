import { TaskStatus } from '../services/types';
import { colors } from '../theme';

export const TASK_STATUS_OPTIONS: Array<{ label: string; value: TaskStatus }> = [
  { label: 'Pendente', value: 'PENDING' },
  { label: 'Em progresso', value: 'IN_PROGRESS' },
  { label: 'Concluída', value: 'DONE' },
];

export const statusLabel: Record<TaskStatus, string> = {
  PENDING: 'Pendente',
  IN_PROGRESS: 'Em progresso',
  DONE: 'Concluída',
};

export const statusColor: Record<TaskStatus, string> = {
  PENDING: colors.status.pending,
  IN_PROGRESS: colors.status.inProgress,
  DONE: colors.status.done,
};

export const statusBackgroundColor: Record<TaskStatus, string> = {
  PENDING: colors.status.pendingBackground,
  IN_PROGRESS: colors.status.inProgressBackground,
  DONE: colors.status.doneBackground,
};

export function nextStatus(status: TaskStatus): TaskStatus {
  if (status === 'PENDING') {
    return 'IN_PROGRESS';
  }

  if (status === 'IN_PROGRESS') {
    return 'DONE';
  }

  return 'PENDING';
}
