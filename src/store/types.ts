import { TaskStatus } from '../services/types';

export interface TaskFiltersState {
  search: string;
  selectedStatus?: TaskStatus;
  selectedTeamId?: string;
  setSearch: (search: string) => void;
  setStatus: (status?: TaskStatus) => void;
  setTeamId: (teamId?: string) => void;
  clearFilters: () => void;
}
