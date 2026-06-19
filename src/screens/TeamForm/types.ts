import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Control, FieldErrors } from 'react-hook-form';
import { z } from 'zod';

import { RootStackParamList } from '../../routes/types';

export type TeamFormNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'TeamForm'
>;

export type TeamFormRoute = RouteProp<RootStackParamList, 'TeamForm'>;

export const TEAM_COLOR_OPTIONS = [
  '#2563EB',
  '#16A34A',
  '#D97706',
  '#DC2626',
  '#7C3AED',
  '#0891B2',
] as const;

export const teamFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Informe pelo menos 2 caracteres.')
    .max(80, 'Use até 80 caracteres.'),
  description: z.string().max(280, 'Use até 280 caracteres.').optional(),
  colorHex: z
    .string()
    .trim()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'Use uma cor no formato #RRGGBB.'),
});

export type TeamFormValues = z.infer<typeof teamFormSchema>;

export interface TeamFormContainer {
  colorOptions: readonly string[];
  control: Control<TeamFormValues>;
  errors: FieldErrors<TeamFormValues>;
  hasMutationError: boolean;
  isEditing: boolean;
  isBusy: boolean;
  isLoading: boolean;
  selectedColor: string;
  goBack: () => void;
  selectColor: (colorHex: string) => void;
  submit: () => void;
}

export const defaultValues: TeamFormValues = {
  name: '',
  description: '',
  colorHex: TEAM_COLOR_OPTIONS[0],
};
