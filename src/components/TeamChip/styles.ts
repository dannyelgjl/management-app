import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.surface.input,
    borderColor: colors.border.default,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 7,
    minHeight: 36,
    paddingHorizontal: 14,
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
    backgroundColor: colors.brand.tint,
    borderColor: colors.border.selected,
  },
  selectedLabel: {
    color: colors.brand.linkStrong,
  },
});
