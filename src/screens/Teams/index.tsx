import React from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { Skeleton } from '../../components/Skeleton';
import { Team } from '../../services/types';
import { getTeamTaskCountLabel } from '../../utils/team';
import { styles } from './styles';
import { useContainer } from './useContainer';

function ListSeparator() {
  return <View style={styles.separator} />;
}

function TeamCard({
  isDeletingThisTeam,
  onDelete,
  onEdit,
  team,
}: {
  isDeletingThisTeam: boolean;
  onDelete: (team: Team) => void;
  onEdit: (teamId: string) => void;
  team: Team;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={[styles.colorDot, { backgroundColor: team.colorHex }]} />
        <View style={styles.titleStack}>
          <Text style={styles.title}>{team.name}</Text>
          <Text style={styles.meta}>{getTeamTaskCountLabel(team.tasksCount)}</Text>
        </View>
      </View>

      {team.description ? (
        <Text style={styles.description}>{team.description}</Text>
      ) : null}

      <View style={styles.actions}>
        <Button
          title="Editar"
          onPress={() => onEdit(team.id)}
          variant="outline"
          size="small"
          fitContent
        />
        <Button
          title="Excluir"
          onPress={() => onDelete(team)}
          variant="dangerOutline"
          size="small"
          fitContent
          disabled={isDeletingThisTeam}
          loading={isDeletingThisTeam}
        />
      </View>
    </View>
  );
}

function TeamsSkeleton() {
  return (
    <View style={styles.skeletonList}>
      {[0, 1, 2].map((item) => (
        <View key={item} style={styles.skeletonCard}>
          <Skeleton width="52%" height={24} />
          <Skeleton width={112} height={14} />
          <Skeleton width="88%" height={16} />
          <View style={styles.actions}>
            <Skeleton width={74} height={42} />
            <Skeleton width={76} height={42} />
          </View>
        </View>
      ))}
    </View>
  );
}

const Teams = () => {
  const {
    hasError,
    isInitialLoading,
    isRefreshing,
    teams,
    confirmDelete,
    goBack,
    goToCreateTeam,
    goToEditTeam,
    isDeletingTeam,
    refresh,
  } = useContainer();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={ListSeparator}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.heroPanel}>
              <View style={styles.titleRow}>
                <View style={styles.titleStack}>
                  <Text style={styles.heroEyebrow}>Gestão APP</Text>
                  <Text style={styles.heroTitle}>Times</Text>
                </View>
                <Button
                  title="Voltar"
                  onPress={goBack}
                  variant="outline"
                  size="small"
                  fitContent
                />
              </View>
              <Button
                title="Novo time"
                onPress={goToCreateTeam}
                variant="primary"
                size="small"
                fitContent
              />
            </View>

            {isInitialLoading ? <TeamsSkeleton /> : null}

            {hasError ? (
              <View style={styles.feedbackBox}>
                <Text style={styles.feedbackTitle}>
                  Não foi possível carregar os times
                </Text>
                <Button
                  title="Tentar novamente"
                  onPress={refresh}
                  variant="dangerOutline"
                  size="small"
                  fitContent
                />
              </View>
            ) : null}
          </View>
        }
        renderItem={({ item }) => (
          <TeamCard
            isDeletingThisTeam={isDeletingTeam(item.id)}
            onDelete={confirmDelete}
            onEdit={goToEditTeam}
            team={item}
          />
        )}
        ListEmptyComponent={
          isInitialLoading || hasError ? null : (
            <View style={styles.emptyBox}>
              <Text style={styles.emptyTitle}>Nenhum time cadastrado</Text>
              <Text style={styles.emptyText}>Crie um time para organizar tarefas.</Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default Teams;
