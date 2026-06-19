import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useTasks, useTeams } from '../../hooks/useManagementData';
import { useTaskFilters } from '../../store/useTaskFilters';
import { TASK_STATUS_OPTIONS } from '../../utils/status';
import { HomeContainer, HomeNavigation } from './types';

export function useContainer(): HomeContainer {
  const navigation = useNavigation<HomeNavigation>();
  const {
    search,
    selectedStatus,
    selectedTeamId,
    setSearch,
    setStatus,
    setTeamId,
    clearFilters,
  } = useTaskFilters();

  const filters = useMemo(
    () => ({
      search,
      status: selectedStatus,
      teamId: selectedTeamId,
      limit: 30,
      offset: 0,
      sort: 'createdAt:desc',
    }),
    [search, selectedStatus, selectedTeamId],
  );

  const teamsQuery = useTeams();
  const tasksQuery = useTasks(filters);
  const teams = teamsQuery.data?.data ?? [];
  const tasks = tasksQuery.data?.data ?? [];
  const taskTotal = tasksQuery.data?.meta?.total ?? tasks.length;
  const selectedTeam = teams.find((team) => team.id === selectedTeamId);

  function refresh() {
    teamsQuery.refetch();
    tasksQuery.refetch();
  }

  function selectTeam(teamId?: string) {
    setTeamId(teamId === selectedTeamId ? undefined : teamId);
  }

  function selectStatus(status?: typeof selectedStatus) {
    setStatus(status === selectedStatus ? undefined : status);
  }

  return {
    search,
    selectedStatus,
    selectedTeamId,
    selectedTeam,
    teams,
    tasks,
    taskTotal,
    isRefreshing: teamsQuery.isFetching || tasksQuery.isFetching,
    isInitialLoading: tasksQuery.isLoading || teamsQuery.isLoading,
    hasTasksError: tasksQuery.isError,
    hasActiveFilters: Boolean(search || selectedStatus || selectedTeamId),
    statusOptions: TASK_STATUS_OPTIONS,
    setSearch,
    selectStatus,
    selectTeam,
    clearFilters,
    refresh,
    goToCreateTask: () => navigation.navigate('TaskForm'),
    goToTaskDetails: (taskId: string) =>
      navigation.navigate('TaskDetails', { taskId }),
  };
}
