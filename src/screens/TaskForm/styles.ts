import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    color: colors.brand.link,
    fontSize: 15,
    fontWeight: '900',
  },
  centerBox: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 180,
    justifyContent: 'center',
  },
  content: {
    gap: 16,
    padding: 16,
    paddingBottom: 32,
  },
  disabled: {
    opacity: 0.55,
  },
  errorBox: {
    backgroundColor: colors.danger.background,
    borderColor: colors.danger.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
  errorBoxText: {
    color: colors.danger.text,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  errorText: {
    color: colors.danger.validation,
    fontSize: 12,
    fontWeight: '700',
  },
  field: {
    gap: 8,
  },
  formCard: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    gap: 16,
    padding: 16,
  },
  input: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.strong,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.text.primary,
    fontSize: 15,
    minHeight: 46,
    paddingHorizontal: 12,
  },
  inputError: {
    borderColor: colors.danger.inputBorder,
  },
  keyboard: {
    flex: 1,
  },
  label: {
    color: colors.text.primary,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  modeLabel: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.75,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: colors.brand.primary,
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 48,
  },
  primaryButtonText: {
    color: colors.text.inverted,
    fontSize: 15,
    fontWeight: '900',
  },
  safeArea: {
    backgroundColor: colors.surface.app,
    flex: 1,
  },
  statusButton: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    flexGrow: 1,
    minHeight: 38,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  statusButtonActive: {
    backgroundColor: colors.brand.subtle,
    borderColor: colors.brand.link,
  },
  statusButtonText: {
    color: colors.text.body,
    fontSize: 12,
    fontWeight: '900',
  },
  statusButtonTextActive: {
    color: colors.brand.linkStrong,
  },
  statusRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  textArea: {
    minHeight: 110,
    paddingTop: 12,
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
