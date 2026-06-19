import React from 'react';
import { Pressable, PressableStateCallbackType, Text } from 'react-native';

import { styles } from './styles';
import { FilterChipProps, FilterChipStyleOptions } from './types';

export function getFilterChipStyle(
  { pressed }: PressableStateCallbackType,
  { selected, style }: FilterChipStyleOptions,
) {
  return [
    styles.container,
    selected && styles.selectedContainer,
    pressed && styles.pressed,
    style,
  ];
}

export function FilterChip({ label, selected = false, style, ...props }: FilterChipProps) {
  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      style={(state) => getFilterChipStyle(state, { selected, style })}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
}
