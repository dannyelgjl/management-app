import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  error?: string;
  label?: string;
}
