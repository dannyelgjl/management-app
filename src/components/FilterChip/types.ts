import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export interface FilterChipProps extends Omit<PressableProps, 'children' | 'style'> {
  label: string;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
}

export type FilterChipStyleOptions = {
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
};
