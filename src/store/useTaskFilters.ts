import { create } from 'zustand';

import { TaskStatus } from '../services/types';

interface TaskFiltersState {
  search: string;
  selectedStatus?: TaskStatus;
  selectedTeamId?: string;
  setSearch: (search: string) => void;
  setStatus: (status?: TaskStatus) => void;
  setTeamId: (teamId?: string) => void;
  clearFilters: () => void;
}

export const useTaskFilters = create<TaskFiltersState>((set) => ({
  search: '',
  selectedStatus: undefined,
  selectedTeamId: undefined,
  setSearch: (search) => set({ search }),
  setStatus: (selectedStatus) => set({ selectedStatus }),
  setTeamId: (selectedTeamId) => set({ selectedTeamId }),
  clearFilters: () =>
    set({
      search: '',
      selectedStatus: undefined,
      selectedTeamId: undefined,
    }),
}));
