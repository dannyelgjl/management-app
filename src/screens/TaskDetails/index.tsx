import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { Skeleton } from '../../components/Skeleton';
import { StatusPill } from '../../components/StatusPill';
import { TeamChip } from '../../components/TeamChip';
import { formatDate } from '../../utils/date';
import { styles } from './styles';
import { useContainer } from './useContainer';

function TaskDetailsSkeleton() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.topBar}>
        <Skeleton width={54} height={18} />
        <Skeleton width={70} height={42} />
      </View>

      <View style={styles.card}>
        <Skeleton width={96} height={28} borderRadius={999} />
        <Skeleton width="88%" height={34} />
        <Skeleton width={124} height={14} />
        <View style={styles.descriptionSkeleton}>
          <Skeleton height={16} />
          <Skeleton width="76%" height={16} />
        </View>

        <View style={styles.section}>
          <Skeleton width={58} height={14} />
          <View style={styles.chips}>
            <Skeleton width={96} height={34} borderRadius={999} />
            <Skeleton width={112} height={34} borderRadius={999} />
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Skeleton height={48} />
        <Skeleton height={42} />
        <Skeleton height={42} />
      </View>
    </ScrollView>
  );
}

const TaskDetails = () => {
  const {
    task,
    isLoading,
    hasError,
    isStatusBusy,
    isDeleteBusy,
    nextStatusLabel,
    shouldShowDoneButton,
    goBack,
    goToEdit,
    retry,
    changeToNextStatus,
    markAsDone,
    confirmDelete,
  } = useContainer();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TaskDetailsSkeleton />
      </SafeAreaView>
    );
  }

  if (hasError || !task) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Button title="Voltar" onPress={goBack} variant="link" size="compact" fitContent />
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackTitle}>Tarefa não encontrada</Text>
            <Button title="Tentar novamente" onPress={retry} size="small" fitContent />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
          <Button title="Voltar" onPress={goBack} variant="link" size="compact" />
          <Button title="Editar" onPress={goToEdit} variant="outline" size="small" />
        </View>

        <View style={styles.card}>
          <View style={styles.detailHeader}>
            <StatusPill status={task.status} />
            <Text style={styles.date}>{formatDate(task.dueDate)}</Text>
          </View>

          <Text style={styles.title}>{task.title}</Text>

          <View style={styles.descriptionBlock}>
            {task.description ? (
              <Text style={styles.description}>{task.description}</Text>
            ) : (
              <Text style={styles.muted}>Sem descrição cadastrada.</Text>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Times</Text>
            {task.teams.length ? (
              <View style={styles.chips}>
                {task.teams.map((team) => (
                  <TeamChip key={team.id} team={team} />
                ))}
              </View>
            ) : (
              <Text style={styles.muted}>Nenhum time vinculado.</Text>
            )}
          </View>
        </View>

        <View style={styles.actions}>
          <Button
            title={`Mudar para ${nextStatusLabel}`}
            disabled={isStatusBusy}
            loading={isStatusBusy}
            onPress={changeToNextStatus}
          />

          {shouldShowDoneButton ? (
            <Button
              title="Marcar como concluída"
              variant="success"
              size="small"
              disabled={isStatusBusy}
              loading={isStatusBusy}
              onPress={markAsDone}
            />
          ) : null}

          <Button
            title="Excluir tarefa"
            variant="dangerOutline"
            size="small"
            disabled={isDeleteBusy}
            loading={isDeleteBusy}
            onPress={confirmDelete}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetails;
