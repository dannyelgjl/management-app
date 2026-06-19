import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import {
  useCreateTeam,
  useTeam,
  useUpdateTeam,
} from '../../hooks/useManagementData';
import {
  defaultValues,
  TeamFormContainer,
  TeamFormNavigation,
  TeamFormRoute,
  TeamFormValues,
  TEAM_COLOR_OPTIONS,
  teamFormSchema,
} from './types';

export function useContainer(): TeamFormContainer {
  const navigation = useNavigation<TeamFormNavigation>();
  const route = useRoute<TeamFormRoute>();
  const teamId = route.params?.teamId;
  const isEditing = Boolean(teamId);
  const teamQuery = useTeam(teamId);
  const createMutation = useCreateTeam();
  const updateMutation = useUpdateTeam(teamId ?? '');

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<TeamFormValues>({
    resolver: zodResolver(teamFormSchema),
    defaultValues,
  });

  const selectedColor = watch('colorHex');

  useEffect(() => {
    if (teamQuery.data) {
      reset({
        name: teamQuery.data.name,
        description: teamQuery.data.description ?? '',
        colorHex: teamQuery.data.colorHex,
      });
    }
  }, [reset, teamQuery.data]);

  function selectColor(colorHex: string) {
    setValue('colorHex', colorHex, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  const submit = handleSubmit((values) => {
    const payload = {
      name: values.name.trim(),
      description: values.description?.trim() || undefined,
      colorHex: values.colorHex.trim().toUpperCase(),
    };
    const options = {
      onSuccess: () => navigation.goBack(),
    };

    if (isEditing && teamId) {
      updateMutation.mutate({ payload, teamId }, options);
      return;
    }

    createMutation.mutate(payload, options);
  });

  return {
    colorOptions: TEAM_COLOR_OPTIONS,
    control,
    errors,
    hasMutationError: createMutation.isError || updateMutation.isError,
    isEditing,
    isBusy: createMutation.isPending || updateMutation.isPending || isSubmitting,
    isLoading: isEditing && teamQuery.isLoading,
    selectedColor,
    goBack: () => navigation.goBack(),
    selectColor,
    submit,
  };
}
