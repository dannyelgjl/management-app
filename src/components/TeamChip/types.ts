import { Team } from '../../services/types';

export interface TeamChipProps {
  team: Team;
  selected?: boolean;
  onPress?: () => void;
}
