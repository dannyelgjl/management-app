import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { FilterChip } from '../../components/FilterChip';
import { Input } from '../../components/Input';
import { Skeleton } from '../../components/Skeleton';
import { TeamChip } from '../../components/TeamChip';
import { maskDateInput } from '../../utils/date';
import { styles } from './styles';
import { useContainer } from './useContainer';

function FieldSkeleton({ multiline = false }: { multiline?: boolean }) {
  return (
    <View style={styles.field}>
      <Skeleton width={82} height={13} />
      <Skeleton height={multiline ? 110 : 46} />
    </View>
  );
}

function FormSkeleton() {
  return (
    <>
      <View style={styles.heroPanel}>
        <Skeleton width={82} height={13} />
        <Skeleton width="62%" height={34} />
        <View style={styles.heroMetaRow}>
          <Skeleton width={94} height={34} borderRadius={999} />
          <Skeleton width={78} height={34} borderRadius={999} />
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Skeleton width={120} height={18} />
        <FieldSkeleton />
        <FieldSkeleton multiline />
        <FieldSkeleton />
      </View>

      <View style={styles.sectionCard}>
        <Skeleton width={62} height={18} />
        <View style={styles.statusRow}>
          <Skeleton width={88} height={36} borderRadius={999} />
          <Skeleton width={112} height={36} borderRadius={999} />
          <Skeleton width={96} height={36} borderRadius={999} />
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Skeleton width={52} height={18} />
        <TeamSkeleton />
      </View>
    </>
  );
}

function TeamSkeleton() {
  return (
    <View style={styles.teamGrid}>
      <Skeleton width={96} height={34} borderRadius={999} />
      <Skeleton width={118} height={34} borderRadius={999} />
      <Skeleton width={86} height={34} borderRadius={999} />
    </View>
  );
}

const TaskForm = () => {
  const {
    control,
    errors,
    isEditing,
    isLoading,
    isBusy,
    selectedTeamIds,
    selectedStatusLabel,
    selectedTeamsLabel,
    selectedStatus,
    teams,
    teamsLoading,
    hasMutationError,
    statusOptions,
    goBack,
    goToCreateTeam,
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
          {isLoading ? (
            <FormSkeleton />
          ) : (
            <>
              <View style={styles.heroPanel}>
                <View style={styles.heroTopRow}>
                  <Text style={styles.heroEyebrow}>
                    {isEditing ? 'Edição' : 'Cadastro'}
                  </Text>
                  <Button
                    title="Voltar"
                    onPress={goBack}
                    variant="outline"
                    size="small"
                    fitContent
                    style={styles.heroBackButton}
                    textStyle={styles.heroBackButtonText}
                  />
                </View>

                <Text style={styles.heroTitle}>
                  {isEditing ? 'Editar tarefa' : 'Nova tarefa'}
                </Text>

                <View style={styles.heroMetaRow}>
                  <Text style={styles.heroMeta}>{selectedStatusLabel}</Text>
                  <Text style={styles.heroMeta}>{selectedTeamsLabel}</Text>
                </View>
              </View>

              <View style={styles.sectionCard}>
                <Text style={styles.sectionTitle}>Dados principais</Text>

                <View style={styles.field}>
                  <Controller
                    control={control}
                    name="title"
                    render={({ field: { onBlur, onChange, value } }) => (
                      <Input
                        label="Título"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder="Ex.: Revisar fluxo de tarefas"
                        error={errors.title?.message}
                      />
                    )}
                  />
                </View>

                <View style={styles.field}>
                  <Controller
                    control={control}
                    name="description"
                    render={({ field: { onBlur, onChange, value } }) => (
                      <Input
                        label="Descrição"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder="Detalhes da tarefa"
                        multiline
                        error={errors.description?.message}
                      />
                    )}
                  />
                </View>

                <View style={styles.field}>
                  <Controller
                    control={control}
                    name="dueDate"
                    render={({ field: { onBlur, onChange, value } }) => (
                      <Input
                        label="Prazo"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={(text) => onChange(maskDateInput(text))}
                        placeholder="DD-MM-AAAA"
                        keyboardType="numbers-and-punctuation"
                        maxLength={10}
                        error={errors.dueDate?.message}
                      />
                    )}
                  />
                </View>
              </View>

              <View style={styles.sectionCard}>
                <Text style={styles.sectionTitle}>Status</Text>
                <View style={styles.statusRow}>
                  {statusOptions.map((option) => (
                    <FilterChip
                      key={option.value}
                      label={option.label}
                      selected={selectedStatus === option.value}
                      onPress={() => selectStatus(option.value)}
                    />
                  ))}
                </View>
              </View>

              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Times</Text>
                  <Button
                    title="Novo time"
                    onPress={goToCreateTeam}
                    variant="link"
                    size="compact"
                    fitContent
                  />
                </View>
                {teamsLoading ? (
                  <TeamSkeleton />
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
            </>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {hasMutationError ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorBoxText}>
                Não foi possível salvar. Confira os dados e tente novamente.
              </Text>
            </View>
          ) : null}

          <Button
            title={isEditing ? 'Salvar alterações' : 'Criar tarefa'}
            disabled={isBusy || isLoading}
            loading={isBusy}
            onPress={submit}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TaskForm;
