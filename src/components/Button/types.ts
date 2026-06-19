import { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonSize = 'compact' | 'small' | 'medium';

export type ButtonVariant =
  | 'danger'
  | 'dangerOutline'
  | 'link'
  | 'outline'
  | 'primary'
  | 'success';

export interface ButtonProps extends Omit<PressableProps, 'children' | 'style'> {
  fitContent?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  variant?: ButtonVariant;
}
