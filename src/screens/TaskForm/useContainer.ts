import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { TaskStatus } from '../../services/types';
import {
  useCreateTask,
  useTask,
  useTeams,
  useUpdateTask,
} from '../../hooks/useManagementData';
import { fromDateInput, toDateInput } from '../../utils/date';
import { TASK_STATUS_OPTIONS } from '../../utils/status';
import {
  defaultValues,
  TaskFormContainer,
  TaskFormNavigation,
  TaskFormRoute,
  TaskFormValues,
  taskFormSchema,
} from './types';

function getSelectedTeamsLabel(selectedTeamCount: number) {
  if (!selectedTeamCount) {
    return 'Sem time';
  }

  if (selectedTeamCount === 1) {
    return '1 time';
  }

  return `${selectedTeamCount} times`;
}

export function useContainer(): TaskFormContainer {
  const navigation = useNavigation<TaskFormNavigation>();
  const route = useRoute<TaskFormRoute>();
  const taskId = route.params?.taskId;
  const isEditing = Boolean(taskId);
  const taskQuery = useTask(taskId);
  const teamsQuery = useTeams();
  const createMutation = useCreateTask();
  const updateMutation = useUpdateTask(taskId ?? '');

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues,
  });

  const selectedTeamIds = watch('teamIds') ?? [];
  const selectedStatus = watch('status');

  useEffect(() => {
    if (taskQuery.data) {
      reset({
        title: taskQuery.data.title,
        description: taskQuery.data.description ?? '',
        dueDate: toDateInput(taskQuery.data.dueDate),
        status: taskQuery.data.status,
        teamIds: taskQuery.data.teams.map((team) => team.id),
      });
    }
  }, [reset, taskQuery.data]);

  function toggleTeam(teamIdValue: string) {
    const next = selectedTeamIds.includes(teamIdValue)
      ? selectedTeamIds.filter((id) => id !== teamIdValue)
      : [...selectedTeamIds, teamIdValue];

    setValue('teamIds', next, { shouldDirty: true, shouldValidate: true });
  }

  function selectStatus(status: TaskStatus) {
    setValue('status', status, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  const submit = handleSubmit((values) => {
    const payload = {
      title: values.title.trim(),
      description: values.description?.trim() || undefined,
      status: values.status,
      dueDate: fromDateInput(values.dueDate),
      teamIds: values.teamIds ?? [],
    };

    const options = {
      onSuccess: (task: { id: string }) => {
        navigation.navigate('TaskDetails', { taskId: task.id });
      },
    };

    if (isEditing && taskId) {
      updateMutation.mutate({ payload, taskId }, options);
      return;
    }

    createMutation.mutate(payload, options);
  });

  return {
    control,
    errors,
    isEditing,
    isLoading: isEditing && taskQuery.isLoading,
    isBusy: createMutation.isPending || updateMutation.isPending || isSubmitting,
    selectedTeamIds,
    selectedStatusLabel:
      TASK_STATUS_OPTIONS.find((option) => option.value === selectedStatus)?.label ?? '',
    selectedTeamsLabel: getSelectedTeamsLabel(selectedTeamIds.length),
    selectedStatus,
    teams: teamsQuery.data?.data ?? [],
    teamsLoading: teamsQuery.isLoading,
    hasMutationError: createMutation.isError || updateMutation.isError,
    statusOptions: TASK_STATUS_OPTIONS,
    goBack: () => navigation.goBack(),
    goToCreateTeam: () => navigation.navigate('TeamForm'),
    selectStatus,
    toggleTeam,
    submit,
  };
}
