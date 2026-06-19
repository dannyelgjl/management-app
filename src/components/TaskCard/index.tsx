import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { formatDate } from '../../utils/date';
import { StatusPill } from '../StatusPill';
import { TeamChip } from '../TeamChip';
import { styles } from './styles';
import { TaskCardProps } from './types';

export function TaskCard({ task, onPress }: TaskCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {task.title}
        </Text>
        <StatusPill status={task.status} />
      </View>

      {task.description ? (
        <Text style={styles.description} numberOfLines={2}>
          {task.description}
        </Text>
      ) : null}

      <View style={styles.footer}>
        <Text style={styles.date}>{formatDate(task.dueDate)}</Text>
        <Text style={styles.teamCount}>
          {task.teams.length ? `${task.teams.length} time(s)` : 'Sem time'}
        </Text>
      </View>

      {task.teams.length ? (
        <View style={styles.chips}>
          {task.teams.map((team) => (
            <TeamChip key={team.id} team={team} />
          ))}
        </View>
      ) : null}
    </Pressable>
  );
}
