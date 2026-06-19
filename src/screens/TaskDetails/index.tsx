import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusPill } from '../../components/StatusPill';
import { TeamChip } from '../../components/TeamChip';
import { colors } from '../../theme';
import { formatDate } from '../../utils/date';
import { styles } from './styles';
import { useContainer } from './useContainer';

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
        <View style={styles.centerBox}>
          <ActivityIndicator color={colors.brand.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (hasError || !task) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Pressable onPress={goBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackTitle}>Tarefa nao encontrada</Text>
            <Pressable onPress={retry} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Tentar novamente</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
          <Pressable onPress={goBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          <Pressable onPress={goToEdit} style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <StatusPill status={task.status} />
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.date}>{formatDate(task.dueDate)}</Text>

          {task.description ? (
            <Text style={styles.description}>{task.description}</Text>
          ) : (
            <Text style={styles.muted}>Sem descricao cadastrada.</Text>
          )}

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
          <Pressable
            disabled={isStatusBusy}
            onPress={changeToNextStatus}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
              isStatusBusy && styles.disabled,
            ]}>
            <Text style={styles.primaryButtonText}>
              Mudar para {nextStatusLabel}
            </Text>
          </Pressable>

          {shouldShowDoneButton ? (
            <Pressable
              disabled={isStatusBusy}
              onPress={markAsDone}
              style={({ pressed }) => [
                styles.doneButton,
                pressed && styles.pressed,
                isStatusBusy && styles.disabled,
              ]}>
              <Text style={styles.doneButtonText}>Marcar como concluida</Text>
            </Pressable>
          ) : null}

          <Pressable
            disabled={isDeleteBusy}
            onPress={confirmDelete}
            style={({ pressed }) => [
              styles.deleteButton,
              pressed && styles.pressed,
              isDeleteBusy && styles.disabled,
            ]}>
            <Text style={styles.deleteButtonText}>Excluir tarefa</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetails;
