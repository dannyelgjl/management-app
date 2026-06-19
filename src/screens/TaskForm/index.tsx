import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TeamChip } from '../../components/TeamChip';
import { colors } from '../../theme';
import { styles } from './styles';
import { useContainer } from './useContainer';

const TaskForm = () => {
  const {
    control,
    errors,
    isEditing,
    isLoading,
    isBusy,
    selectedTeamIds,
    selectedStatus,
    teams,
    teamsLoading,
    hasMutationError,
    statusOptions,
    goBack,
    selectStatus,
    toggleTeam,
    submit,
  } = useContainer();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.topBar}>
            <Pressable onPress={goBack} style={styles.backButton}>
              <Text style={styles.backButtonText}>Voltar</Text>
            </Pressable>
            <Text style={styles.modeLabel}>{isEditing ? 'Editar' : 'Nova tarefa'}</Text>
          </View>

          {isLoading ? (
            <View style={styles.centerBox}>
              <ActivityIndicator color={colors.brand.primary} />
            </View>
          ) : (
            <View style={styles.formCard}>
              <View style={styles.field}>
                <Text style={styles.label}>Titulo</Text>
                <Controller
                  control={control}
                  name="title"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder="Ex.: Revisar fluxo de tarefas"
                      placeholderTextColor={colors.text.placeholder}
                      style={[styles.input, errors.title && styles.inputError]}
                    />
                  )}
                />
                {errors.title ? (
                  <Text style={styles.errorText}>{errors.title.message}</Text>
                ) : null}
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Descricao</Text>
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder="Detalhes da tarefa"
                      placeholderTextColor={colors.text.placeholder}
                      multiline
                      textAlignVertical="top"
                      style={[styles.input, styles.textArea]}
                    />
                  )}
                />
                {errors.description ? (
                  <Text style={styles.errorText}>{errors.description.message}</Text>
                ) : null}
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Prazo</Text>
                <Controller
                  control={control}
                  name="dueDate"
                  render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder="YYYY-MM-DD"
                      placeholderTextColor={colors.text.placeholder}
                      keyboardType="numbers-and-punctuation"
                      style={[styles.input, errors.dueDate && styles.inputError]}
                    />
                  )}
                />
                {errors.dueDate ? (
                  <Text style={styles.errorText}>{errors.dueDate.message}</Text>
                ) : null}
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Status</Text>
                <View style={styles.statusRow}>
                  {statusOptions.map((option) => (
                    <Pressable
                      key={option.value}
                      onPress={() => selectStatus(option.value)}
                      style={({ pressed }) => [
                        styles.statusButton,
                        selectedStatus === option.value && styles.statusButtonActive,
                        pressed && styles.pressed,
                      ]}>
                      <Text
                        style={[
                          styles.statusButtonText,
                          selectedStatus === option.value &&
                            styles.statusButtonTextActive,
                        ]}>
                        {option.label}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Times</Text>
                {teamsLoading ? (
                  <ActivityIndicator color={colors.brand.primary} />
                ) : (
                  <View style={styles.teamGrid}>
                    {teams.map((team) => (
                      <TeamChip
                        key={team.id}
                        team={team}
                        selected={selectedTeamIds.includes(team.id)}
                        onPress={() => toggleTeam(team.id)}
                      />
                    ))}
                  </View>
                )}
              </View>

              {hasMutationError ? (
                <View style={styles.errorBox}>
                  <Text style={styles.errorBoxText}>
                    Nao foi possivel salvar. Confira os dados e tente novamente.
                  </Text>
                </View>
              ) : null}

              <Pressable
                disabled={isBusy}
                onPress={submit}
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && styles.pressed,
                  isBusy && styles.disabled,
                ]}>
                <Text style={styles.primaryButtonText}>
                  {isBusy ? 'Salvando...' : 'Salvar tarefa'}
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TaskForm;
