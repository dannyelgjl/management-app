import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: 8,
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  compact: {
    minHeight: 0,
    paddingHorizontal: 0,
    paddingVertical: 6,
  },
  compactText: {
    fontSize: 13,
    fontWeight: '800',
  },
  danger: {
    backgroundColor: colors.danger.background,
    borderColor: colors.danger.border,
    borderWidth: 1,
  },
  dangerOutline: {
    backgroundColor: colors.surface.card,
    borderColor: colors.danger.border,
    borderWidth: 1,
  },
  dangerOutlineText: {
    color: colors.danger.text,
  },
  dangerText: {
    color: colors.danger.text,
  },
  disabled: {
    opacity: 0.55,
  },
  fitContent: {
    alignSelf: 'flex-start',
  },
  link: {
    backgroundColor: colors.common.transparent,
  },
  linkText: {
    color: colors.brand.link,
  },
  medium: {
    minHeight: 48,
    paddingHorizontal: 14,
  },
  mediumText: {
    fontSize: 15,
    fontWeight: '900',
  },
  outline: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.strong,
    borderWidth: 1,
  },
  outlineText: {
    color: colors.text.primary,
  },
  pressed: {
    opacity: 0.75,
  },
  primary: {
    backgroundColor: colors.brand.primary,
    borderColor: colors.brand.primary,
    borderWidth: 1,
  },
  primaryText: {
    color: colors.text.inverted,
  },
  small: {
    minHeight: 42,
    paddingHorizontal: 14,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '900',
  },
  success: {
    backgroundColor: colors.success.background,
    borderColor: colors.success.border,
    borderWidth: 1,
  },
  successText: {
    color: colors.success.text,
  },
  text: {
    color: colors.text.inverted,
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
});
