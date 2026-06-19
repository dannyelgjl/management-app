import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { SkeletonProps } from './types';

export function Skeleton({
  borderRadius = 8,
  height = 16,
  style,
  width = '100%',
}: SkeletonProps) {
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      style={[styles.container, { borderRadius, height, width }, style]}
    />
  );
}
