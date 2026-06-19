import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  errorText: {
    color: colors.danger.validation,
    fontSize: 12,
    fontWeight: '700',
  },
  input: {
    backgroundColor: colors.surface.input,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.text.primary,
    fontSize: 15,
    minHeight: 48,
    paddingHorizontal: 14,
  },
  inputError: {
    borderColor: colors.danger.inputBorder,
  },
  label: {
    color: colors.text.primary,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  textArea: {
    minHeight: 110,
    paddingTop: 12,
  },
});
