import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Task, TaskStatus, Team } from '../../services/types';
import { RootStackParamList } from '../../routes/types';

export type HomeNavigation = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export interface StatusOption {
  label: string;
  value: TaskStatus;
}

export interface HomeContainer {
  search: string;
  selectedStatus?: TaskStatus;
  selectedTeamId?: string;
  selectedTeam?: Team;
  teams: Team[];
  tasks: Task[];
  taskTotal: number;
  isRefreshing: boolean;
  isInitialLoading: boolean;
  hasTasksError: boolean;
  hasActiveFilters: boolean;
  statusOptions: StatusOption[];
  setSearch: (search: string) => void;
  selectStatus: (status?: TaskStatus) => void;
  selectTeam: (teamId?: string) => void;
  clearFilters: () => void;
  refresh: () => void;
  goToCreateTask: () => void;
  goToTaskDetails: (taskId: string) => void;
}
