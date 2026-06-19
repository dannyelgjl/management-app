import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Task } from '../../services/types';
import { RootStackParamList } from '../../routes/types';

export type TaskDetailsNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'TaskDetails'
>;

export type TaskDetailsRoute = RouteProp<RootStackParamList, 'TaskDetails'>;

export interface TaskDetailsContainer {
  task?: Task;
  isLoading: boolean;
  hasError: boolean;
  isStatusBusy: boolean;
  isDeleteBusy: boolean;
  nextStatusLabel: string;
  shouldShowDoneButton: boolean;
  goBack: () => void;
  goToEdit: () => void;
  retry: () => void;
  changeToNextStatus: () => void;
  markAsDone: () => void;
  confirmDelete: () => void;
}
