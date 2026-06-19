import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';
import { FilterChipProps } from './types';

export function FilterChip({ label, selected = false, style, ...props }: FilterChipProps) {
  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.container,
        selected && styles.selectedContainer,
        pressed && styles.pressed,
        style,
      ]}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
}
