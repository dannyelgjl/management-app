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
  hasNextPage: boolean;
  isOffline: boolean;
  isFetchingNextPage: boolean;
  isRefreshing: boolean;
  isInitialLoading: boolean;
  hasTasksError: boolean;
  hasActiveFilters: boolean;
  pendingSyncCount: number;
  statusOptions: StatusOption[];
  setSearch: (search: string) => void;
  selectStatus: (status?: TaskStatus) => void;
  selectTeam: (teamId?: string) => void;
  clearFilters: () => void;
  refresh: () => void;
  fetchNextPage: () => void;
  goToCreateTeam: () => void;
  goToCreateTask: () => void;
  goToTeams: () => void;
  goToTaskDetails: (taskId: string) => void;
}

export interface PaginationFooterProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isVisible: boolean;
  loadedTotal: number;
  taskTotal: number;
}
