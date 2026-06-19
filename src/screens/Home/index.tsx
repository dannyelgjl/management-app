import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TaskCard } from '../../components/TaskCard';
import { TeamChip } from '../../components/TeamChip';
import { colors } from '../../theme';
import { statusLabel } from '../../utils/status';
import { styles } from './styles';
import { useContainer } from './useContainer';

function ListSeparator() {
  return <View style={styles.separator} />;
}

const Home = () => {
  const {
    search,
    selectedStatus,
    selectedTeamId,
    selectedTeam,
    teams,
    tasks,
    taskTotal,
    isRefreshing,
    isInitialLoading,
    hasTasksError,
    hasActiveFilters,
    statusOptions,
    setSearch,
    selectStatus,
    selectTeam,
    clearFilters,
    refresh,
    goToCreateTask,
    goToTaskDetails,
  } = useContainer();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={ListSeparator}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <View>
                <Text style={styles.eyebrow}>Management App</Text>
                <Text style={styles.title}>Tarefas</Text>
              </View>
              <Pressable
                onPress={goToCreateTask}
                style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
                <Text style={styles.primaryButtonText}>Nova</Text>
              </Pressable>
            </View>

            <View style={styles.summaryRow}>
              <View style={styles.summaryBox}>
                <Text style={styles.summaryValue}>{taskTotal}</Text>
                <Text style={styles.summaryLabel}>tarefas</Text>
              </View>
              <View style={styles.summaryBox}>
                <Text style={styles.summaryValue}>{teams.length}</Text>
                <Text style={styles.summaryLabel}>times</Text>
              </View>
              <View style={styles.summaryBoxWide}>
                <Text style={styles.summaryValue} numberOfLines={1}>
                  {selectedTeam?.name ?? 'Global'}
                </Text>
                <Text style={styles.summaryLabel}>visao</Text>
              </View>
            </View>

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar por titulo ou descricao"
              placeholderTextColor={colors.text.placeholder}
              style={styles.searchInput}
              autoCapitalize="none"
              returnKeyType="search"
            />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterRow}>
              <Pressable
                onPress={() => selectTeam(undefined)}
                style={({ pressed }) => [
                  styles.filterChip,
                  !selectedTeamId && styles.filterChipActive,
                  pressed && styles.pressed,
                ]}>
                <Text
                  style={[
                    styles.filterChipText,
                    !selectedTeamId && styles.filterChipTextActive,
                  ]}>
                  Todos
                </Text>
              </Pressable>
              {teams.map((team) => (
                <TeamChip
                  key={team.id}
                  team={team}
                  selected={team.id === selectedTeamId}
                  onPress={() => selectTeam(team.id)}
                />
              ))}
            </ScrollView>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterRow}>
              <Pressable
                onPress={() => selectStatus(undefined)}
                style={({ pressed }) => [
                  styles.statusFilter,
                  !selectedStatus && styles.statusFilterActive,
                  pressed && styles.pressed,
                ]}>
                <Text
                  style={[
                    styles.statusFilterText,
                    !selectedStatus && styles.statusFilterTextActive,
                  ]}>
                  Todos status
                </Text>
              </Pressable>
              {statusOptions.map((option) => (
                <Pressable
                  key={option.value}
                  onPress={() => selectStatus(option.value)}
                  style={({ pressed }) => [
                    styles.statusFilter,
                    option.value === selectedStatus && styles.statusFilterActive,
                    pressed && styles.pressed,
                  ]}>
                  <Text
                    style={[
                      styles.statusFilterText,
                      option.value === selectedStatus &&
                        styles.statusFilterTextActive,
                    ]}>
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            {hasActiveFilters ? (
              <Pressable onPress={clearFilters} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Limpar filtros</Text>
              </Pressable>
            ) : null}

            {isInitialLoading ? (
              <View style={styles.loadingBox}>
                <ActivityIndicator color={colors.brand.primary} />
              </View>
            ) : null}

            {hasTasksError ? (
              <View style={styles.feedbackBox}>
                <Text style={styles.feedbackTitle}>Nao foi possivel carregar tarefas</Text>
                <Text style={styles.feedbackText}>
                  Verifique se a API esta rodando em localhost:3000.
                </Text>
                <Pressable onPress={refresh} style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Tentar novamente</Text>
                </Pressable>
              </View>
            ) : null}

            {!hasTasksError && selectedStatus ? (
              <Text style={styles.resultLabel}>
                Filtrando por {statusLabel[selectedStatus].toLowerCase()}
              </Text>
            ) : null}
          </View>
        }
        renderItem={({ item }) => (
          <TaskCard task={item} onPress={() => goToTaskDetails(item.id)} />
        )}
        ListEmptyComponent={
          isInitialLoading || hasTasksError ? null : (
            <View style={styles.emptyBox}>
              <Text style={styles.emptyTitle}>Nenhuma tarefa encontrada</Text>
              <Text style={styles.emptyText}>
                Ajuste os filtros ou cadastre uma nova tarefa.
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default Home;
