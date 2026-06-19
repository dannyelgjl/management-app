import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Control, FieldErrors } from 'react-hook-form';
import { z } from 'zod';

import { TaskStatus, Team } from '../../services/types';
import { RootStackParamList } from '../../routes/types';

export type TaskFormNavigation = NativeStackNavigationProp<RootStackParamList, 'TaskForm'>;

export type TaskFormRoute = RouteProp<RootStackParamList, 'TaskForm'>;

export const taskFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Informe pelo menos 3 caracteres.')
    .max(140, 'Use ate 140 caracteres.'),
  description: z.string().max(1000, 'Use ate 1000 caracteres.').optional(),
  dueDate: z
    .string()
    .regex(/^$|^\d{4}-\d{2}-\d{2}$/, 'Use o formato YYYY-MM-DD.')
    .optional(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'DONE']),
  teamIds: z.array(z.string()).max(20).optional(),
});

export type TaskFormValues = z.infer<typeof taskFormSchema>;

export interface TaskFormStatusOption {
  label: string;
  value: TaskStatus;
}

export interface TaskFormContainer {
  control: Control<TaskFormValues>;
  errors: FieldErrors<TaskFormValues>;
  isEditing: boolean;
  isLoading: boolean;
  isBusy: boolean;
  selectedTeamIds: string[];
  selectedStatus: TaskStatus;
  teams: Team[];
  teamsLoading: boolean;
  hasMutationError: boolean;
  statusOptions: TaskFormStatusOption[];
  goBack: () => void;
  selectStatus: (status: TaskStatus) => void;
  toggleTeam: (teamId: string) => void;
  submit: () => void;
}

export const defaultValues: TaskFormValues = {
  title: '',
  description: '',
  dueDate: '',
  status: 'PENDING',
  teamIds: [],
};
