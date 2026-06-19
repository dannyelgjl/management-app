import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../routes/types';
import { Team } from '../../services/types';

export type TeamsNavigation = NativeStackNavigationProp<RootStackParamList, 'Teams'>;

export interface TeamsContainer {
  hasError: boolean;
  isInitialLoading: boolean;
  isRefreshing: boolean;
  teams: Team[];
  confirmDelete: (team: Team) => void;
  goBack: () => void;
  goToCreateTeam: () => void;
  goToEditTeam: (teamId: string) => void;
  isDeletingTeam: (teamId: string) => boolean;
  refresh: () => void;
}
