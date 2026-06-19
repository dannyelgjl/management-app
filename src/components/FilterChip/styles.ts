import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.surface.input,
    borderColor: colors.border.default,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 36,
    paddingHorizontal: 14,
  },
  label: {
    color: colors.text.body,
    fontSize: 13,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.75,
  },
  selectedContainer: {
    backgroundColor: colors.brand.tint,
    borderColor: colors.border.selected,
  },
  selectedLabel: {
    color: colors.brand.linkStrong,
  },
});
