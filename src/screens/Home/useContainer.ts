import { useMemo } from 'react';
import { useIsMutating } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { useInfiniteTasks, useTeams } from '../../hooks/useManagementData';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';
import { useTaskFilters } from '../../store/useTaskFilters';
import { TASK_STATUS_OPTIONS } from '../../utils/status';
import { HomeContainer, HomeNavigation } from './types';

const TASKS_PAGE_SIZE = 3;

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
      limit: TASKS_PAGE_SIZE,
      sort: 'createdAt:desc',
    }),
    [search, selectedStatus, selectedTeamId],
  );

  const teamsQuery = useTeams();
  const tasksQuery = useInfiniteTasks(filters);
  const pendingSyncCount = useIsMutating({
    predicate: (mutation) => mutation.state.isPaused,
  });
  const { isOffline } = useNetworkStatus();
  const teams = teamsQuery.data?.data ?? [];
  const tasks = tasksQuery.data?.pages.flatMap((page) => page.data) ?? [];
  const firstTaskPage = tasksQuery.data?.pages[0];
  const taskTotal = firstTaskPage?.meta?.total ?? tasks.length;
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
    hasNextPage: Boolean(tasksQuery.hasNextPage),
    isOffline,
    isFetchingNextPage: tasksQuery.isFetchingNextPage,
    isRefreshing:
      (teamsQuery.isFetching || tasksQuery.isRefetching) &&
      !tasksQuery.isLoading &&
      !teamsQuery.isLoading &&
      !tasksQuery.isFetchingNextPage,
    isInitialLoading: tasksQuery.isLoading || teamsQuery.isLoading,
    hasTasksError: tasksQuery.isError,
    hasActiveFilters: Boolean(search || selectedStatus || selectedTeamId),
    pendingSyncCount,
    statusOptions: TASK_STATUS_OPTIONS,
    setSearch,
    selectStatus,
    selectTeam,
    clearFilters,
    refresh,
    fetchNextPage: () => tasksQuery.fetchNextPage(),
    goToCreateTeam: () => navigation.navigate('TeamForm'),
    goToCreateTask: () => navigation.navigate('TaskForm'),
    goToTeams: () => navigation.navigate('Teams'),
    goToTaskDetails: (taskId: string) =>
      navigation.navigate('TaskDetails', { taskId }),
  };
}
