import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  useDeleteTask,
  useTask,
  useUpdateTaskStatus,
} from '../../hooks/useManagementData';
import { nextStatus, statusLabel } from '../../utils/status';
import {
  TaskDetailsContainer,
  TaskDetailsNavigation,
  TaskDetailsRoute,
} from './types';

export function useContainer(): TaskDetailsContainer {
  const navigation = useNavigation<TaskDetailsNavigation>();
  const route = useRoute<TaskDetailsRoute>();
  const { taskId } = route.params;
  const taskQuery = useTask(taskId);
  const statusMutation = useUpdateTaskStatus(taskId);
  const deleteMutation = useDeleteTask(taskId);
  const task = taskQuery.data;
  const next = task ? nextStatus(task.status) : 'PENDING';

  function confirmDelete() {
    Alert.alert('Excluir tarefa', 'Essa acao remove a tarefa do backend.', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () =>
          deleteMutation.mutate(undefined, {
            onSuccess: () => navigation.navigate('Home'),
          }),
      },
    ]);
  }

  return {
    task,
    isLoading: taskQuery.isLoading,
    hasError: taskQuery.isError || !task,
    isStatusBusy: statusMutation.isPending,
    isDeleteBusy: deleteMutation.isPending,
    nextStatusLabel: statusLabel[next].toLowerCase(),
    shouldShowDoneButton: task?.status !== 'DONE',
    goBack: () => navigation.goBack(),
    goToEdit: () => navigation.navigate('TaskForm', { taskId }),
    retry: () => taskQuery.refetch(),
    changeToNextStatus: () => statusMutation.mutate(next),
    markAsDone: () => statusMutation.mutate('DONE'),
    confirmDelete,
  };
}
