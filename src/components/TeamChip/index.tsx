import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './styles';
import { TeamChipProps } from './types';

export function TeamChip({ team, selected = false, onPress }: TeamChipProps) {
  const content = (
    <>
      <View style={[styles.dot, { backgroundColor: team.colorHex }]} />
      <Text style={[styles.label, selected && styles.selectedLabel]} numberOfLines={1}>
        {team.name}
      </Text>
    </>
  );

  if (!onPress) {
    return <View style={styles.container}>{content}</View>;
  }

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        selected && styles.selectedContainer,
        pressed && styles.pressed,
      ]}>
      {content}
    </Pressable>
  );
}
