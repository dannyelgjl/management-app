import React from 'react';
import { Pressable, PressableStateCallbackType, Text, View } from 'react-native';

import { formatDate } from '../../utils/date';
import { statusColor } from '../../utils/status';
import { StatusPill } from '../StatusPill';
import { TeamChip } from '../TeamChip';
import { styles } from './styles';
import { TaskCardProps } from './types';

function getTeamCountLabel(teamCount: number) {
  if (!teamCount) {
    return 'Sem time';
  }

  if (teamCount === 1) {
    return '1 time';
  }

  return `${teamCount} times`;
}

export function getTaskCardStyle({ pressed }: PressableStateCallbackType) {
  return [styles.card, pressed && styles.pressed];
}

export function TaskCard({ task, onPress }: TaskCardProps) {
  const teamCountLabel = getTeamCountLabel(task.teams.length);

  return (
    <Pressable
      onPress={onPress}
      style={getTaskCardStyle}>
      <View
        style={[
          styles.statusAccent,
          { backgroundColor: statusColor[task.status] },
        ]}
      />

      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={styles.metaText} numberOfLines={1}>
            {formatDate(task.dueDate)} · {teamCountLabel}
          </Text>
          <StatusPill status={task.status} />
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {task.title}
        </Text>

        {task.description ? (
          <Text style={styles.description} numberOfLines={2}>
            {task.description}
          </Text>
        ) : null}

        {task.teams.length ? (
          <View style={styles.chips}>
            {task.teams.map((team) => (
              <TeamChip key={team.id} team={team} />
            ))}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}
