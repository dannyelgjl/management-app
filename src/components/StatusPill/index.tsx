import React from 'react';
import { Text, View } from 'react-native';

import {
  statusBackgroundColor,
  statusColor,
  statusLabel,
} from '../../utils/status';
import { styles } from './styles';
import { StatusPillProps } from './types';

export function StatusPill({ status }: StatusPillProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: statusBackgroundColor[status],
          borderColor: statusColor[status],
        },
      ]}>
      <Text style={[styles.label, { color: statusColor[status] }]}>
        {statusLabel[status]}
      </Text>
    </View>
  );
}
