import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDeleteTeam, useTeams } from '../../hooks/useManagementData';
import { Team } from '../../services/types';
import { useTaskFilters } from '../../store/useTaskFilters';
import { getTeamDeleteMessage } from '../../utils/team';
import { TeamsContainer, TeamsNavigation } from './types';

export function useContainer(): TeamsContainer {
  const navigation = useNavigation<TeamsNavigation>();
  const teamsQuery = useTeams();
  const deleteMutation = useDeleteTeam('manage');
  const [deletingTeamId, setDeletingTeamId] = useState<string>();
  const teams = teamsQuery.data?.data ?? [];

  function isDeletingTeam(teamId: string) {
    const isDeletingThisTeam =
      deleteMutation.isPending && deletingTeamId === teamId;

    return isDeletingThisTeam;
  }

  function confirmDelete(team: Team) {
    const message = getTeamDeleteMessage(team.tasksCount);

    Alert.alert('Excluir time', message, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          setDeletingTeamId(team.id);
          deleteMutation.mutate(
            { teamId: team.id },
            {
              onSuccess: () => {
                const { selectedTeamId, setTeamId } = useTaskFilters.getState();

                if (selectedTeamId === team.id) {
                  setTeamId(undefined);
                }
              },
              onSettled: () => setDeletingTeamId(undefined),
            },
          );
        },
      },
    ]);
  }

  return {
    hasError: teamsQuery.isError,
    isInitialLoading: teamsQuery.isLoading,
    isRefreshing: teamsQuery.isRefetching && !teamsQuery.isLoading,
    teams,
    confirmDelete,
    goBack: () => navigation.goBack(),
    goToCreateTeam: () => navigation.navigate('TeamForm'),
    goToEditTeam: (teamId: string) => navigation.navigate('TeamForm', { teamId }),
    isDeletingTeam,
    refresh: () => teamsQuery.refetch(),
  };
}
