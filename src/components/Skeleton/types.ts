import { StyleProp, ViewStyle } from 'react-native';

export interface SkeletonProps {
  borderRadius?: number;
  height?: ViewStyle['height'];
  style?: StyleProp<ViewStyle>;
  width?: ViewStyle['width'];
}
