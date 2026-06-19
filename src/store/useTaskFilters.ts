import { create } from 'zustand';

import { TaskFiltersState } from './types';

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
