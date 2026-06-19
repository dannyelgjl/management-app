import React from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { FilterChip } from '../../components/FilterChip';
import { Input } from '../../components/Input';
import { Skeleton } from '../../components/Skeleton';
import { TaskCard } from '../../components/TaskCard';
import { TeamChip } from '../../components/TeamChip';
import { statusLabel } from '../../utils/status';
import { styles } from './styles';
import { PaginationFooterProps } from './types';
import { useContainer } from './useContainer';

function ListSeparator() {
  return <View style={styles.separator} />;
}

function TaskCardSkeleton() {
  return (
    <View style={styles.taskSkeletonCard}>
      <View style={styles.taskSkeletonHeader}>
        <Skeleton width="62%" height={22} />
        <Skeleton width={86} height={26} borderRadius={999} />
      </View>
      <Skeleton width="94%" height={14} />
      <Skeleton width="72%" height={14} />
      <View style={styles.taskSkeletonFooter}>
        <Skeleton width={96} height={14} />
        <Skeleton width={58} height={14} />
      </View>
      <View style={styles.filterSkeletonRow}>
        <Skeleton width={96} height={34} borderRadius={999} />
        <Skeleton width={112} height={34} borderRadius={999} />
      </View>
    </View>
  );
}

function TaskListSkeleton() {
  return (
    <View style={styles.skeletonList}>
      {[0, 1, 2].map((item) => (
        <TaskCardSkeleton key={item} />
      ))}
    </View>
  );
}

function TeamFilterSkeleton() {
  return (
    <View style={styles.filterSkeletonRow}>
      <Skeleton width={70} height={34} borderRadius={999} />
      <Skeleton width={104} height={34} borderRadius={999} />
      <Skeleton width={92} height={34} borderRadius={999} />
    </View>
  );
}

function PaginationFooter({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isVisible,
  loadedTotal,
  taskTotal,
}: PaginationFooterProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.paginationFooter}>
      <Text style={styles.paginationText}>
        Mostrando {loadedTotal} de {taskTotal} tarefas
      </Text>

      {isFetchingNextPage ? (
        <TaskCardSkeleton />
      ) : hasNextPage ? (
        <Button
          title="Carregar mais"
          onPress={fetchNextPage}
          variant="outline"
          size="small"
        />
      ) : null}
    </View>
  );
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
    hasNextPage,
    isOffline,
    isFetchingNextPage,
    isRefreshing,
    isInitialLoading,
    hasTasksError,
    hasActiveFilters,
    pendingSyncCount,
    statusOptions,
    setSearch,
    selectStatus,
    selectTeam,
    clearFilters,
    refresh,
    fetchNextPage,
    goToCreateTeam,
    goToCreateTask,
    goToTeams,
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
            {isOffline || pendingSyncCount ? (
              <View style={styles.offlineBanner}>
                <Text style={styles.offlineBannerTitle}>
                  {isOffline ? 'Modo offline' : 'Sincronizando alterações'}
                </Text>
                <Text style={styles.offlineBannerText}>
                  {pendingSyncCount
                    ? `${pendingSyncCount} ${
                        pendingSyncCount === 1 ? 'alteração pendente' : 'alterações pendentes'
                      } ${
                        pendingSyncCount === 1 ? 'será sincronizada' : 'serão sincronizadas'
                      } ao voltar a conexão.`
                    : 'Você está vendo os dados salvos no aparelho.'}
                </Text>
              </View>
            ) : null}

            <View style={styles.overviewPanel}>
              <View style={styles.titleRow}>
                <View style={styles.titleStack}>
                  <Text style={styles.eyebrow}>Gestão APP</Text>
                  <Text style={styles.title}>Tarefas</Text>
                </View>
                <Button
                  title="Nova tarefa"
                  onPress={goToCreateTask}
                  size="small"
                  variant="outline"
                />
              </View>

              <View style={styles.summaryRow}>
                <View style={styles.summaryBox}>
                  {isInitialLoading ? (
                    <>
                      <Skeleton width={44} height={24} />
                      <Skeleton width={62} height={12} />
                    </>
                  ) : (
                    <>
                      <Text style={styles.summaryValue}>{taskTotal}</Text>
                      <Text style={styles.summaryLabel}>tarefas</Text>
                    </>
                  )}
                </View>
                <View style={styles.summaryBox}>
                  {isInitialLoading ? (
                    <>
                      <Skeleton width={36} height={24} />
                      <Skeleton width={46} height={12} />
                    </>
                  ) : (
                    <>
                      <Text style={styles.summaryValue}>{teams.length}</Text>
                      <Text style={styles.summaryLabel}>times</Text>
                    </>
                  )}
                </View>
                <View style={styles.summaryBoxWide}>
                  {isInitialLoading ? (
                    <>
                      <Skeleton width="78%" height={24} />
                      <Skeleton width={44} height={12} />
                    </>
                  ) : (
                    <>
                      <Text style={styles.summaryValue} numberOfLines={1}>
                        {selectedTeam?.name ?? 'Global'}
                      </Text>
                      <Text style={styles.summaryLabel}>visão</Text>
                    </>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.filtersPanel}>
              <View style={styles.panelHeader}>
                <Text style={styles.sectionTitle}>Filtros</Text>
                {hasActiveFilters ? (
                  <Button
                    title="Limpar"
                    onPress={clearFilters}
                    variant="link"
                    size="compact"
                    fitContent
                  />
                ) : null}
              </View>

              <Input
                value={search}
                onChangeText={setSearch}
                placeholder="Buscar por título ou descrição"
                autoCapitalize="none"
                returnKeyType="search"
              />

              <View style={styles.filterGroup}>
                <View style={styles.filterGroupHeader}>
                  <Text style={styles.filterLabel}>Times</Text>
                  <View style={styles.filterActions}>
                    <Button
                      title="Gerenciar"
                      onPress={goToTeams}
                      variant="link"
                      size="compact"
                      fitContent
                    />
                    <Button
                      title="Novo time"
                      onPress={goToCreateTeam}
                      variant="link"
                      size="compact"
                      fitContent
                    />
                  </View>
                </View>
                {isInitialLoading ? (
                  <TeamFilterSkeleton />
                ) : (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterRow}>
                    <FilterChip
                      label="Todos"
                      selected={!selectedTeamId}
                      onPress={() => selectTeam(undefined)}
                    />
                    {teams.map((team) => (
                      <TeamChip
                        key={team.id}
                        team={team}
                        selected={team.id === selectedTeamId}
                        onPress={() => selectTeam(team.id)}
                      />
                    ))}
                  </ScrollView>
                )}
              </View>

              <View style={styles.filterGroup}>
                <Text style={styles.filterLabel}>Status</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.filterRow}>
                  <FilterChip
                    label="Todos"
                    selected={!selectedStatus}
                    onPress={() => selectStatus(undefined)}
                  />
                  {statusOptions.map((option) => (
                    <FilterChip
                      key={option.value}
                      label={option.label}
                      selected={option.value === selectedStatus}
                      onPress={() => selectStatus(option.value)}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>

            {isInitialLoading ? (
              <TaskListSkeleton />
            ) : null}

            {hasTasksError ? (
              <View style={styles.feedbackBox}>
                <Text style={styles.feedbackTitle}>Não foi possível carregar tarefas</Text>
                <Button
                  title="Tentar novamente"
                  onPress={refresh}
                  variant="dangerOutline"
                  size="small"
                  fitContent
                />
              </View>
            ) : null}

            {!hasTasksError && !isInitialLoading ? (
              <View style={styles.listIntro}>
                <Text style={styles.sectionTitle}>Tarefas</Text>
                <Text style={styles.resultLabel}>
                  {selectedStatus
                    ? `Filtrando por ${statusLabel[selectedStatus].toLowerCase()}`
                    : `${taskTotal} ${taskTotal === 1 ? 'tarefa encontrada' : 'tarefas encontradas'}`}
                </Text>
              </View>
            ) : null}
          </View>
        }
        renderItem={({ item }) => (
          <TaskCard task={item} onPress={() => goToTaskDetails(item.id)} />
        )}
        ListFooterComponent={
          <PaginationFooter
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isVisible={!isInitialLoading && !hasTasksError && tasks.length > 0}
            loadedTotal={tasks.length}
            taskTotal={taskTotal}
          />
        }
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
