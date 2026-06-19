import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 7,
    minHeight: 34,
    paddingHorizontal: 12,
  },
  dot: {
    borderRadius: 999,
    height: 9,
    width: 9,
  },
  label: {
    color: colors.text.body,
    fontSize: 13,
    fontWeight: '700',
    maxWidth: 140,
  },
  pressed: {
    opacity: 0.75,
  },
  selectedContainer: {
    backgroundColor: colors.brand.primary,
    borderColor: colors.brand.primary,
  },
  selectedLabel: {
    color: colors.text.inverted,
  },
});
