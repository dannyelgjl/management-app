import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { colors } from '../../theme';
import { styles } from './styles';
import { InputProps } from './types';

export function Input({
  containerStyle,
  error,
  label,
  multiline,
  placeholderTextColor = colors.text.placeholder,
  style,
  textAlignVertical,
  ...props
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <TextInput
        {...props}
        multiline={multiline}
        placeholderTextColor={placeholderTextColor}
        textAlignVertical={textAlignVertical ?? (multiline ? 'top' : undefined)}
        style={[
          styles.input,
          multiline && styles.textArea,
          error && styles.inputError,
          style,
        ]}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
