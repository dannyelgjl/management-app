import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  actions: {
    gap: 10,
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    color: colors.brand.link,
    fontSize: 15,
    fontWeight: '900',
  },
  card: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 18,
  },
  centerBox: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  content: {
    gap: 16,
    padding: 16,
    paddingBottom: 32,
  },
  date: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: '800',
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: colors.danger.background,
    borderColor: colors.danger.border,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 46,
  },
  deleteButtonText: {
    color: colors.danger.text,
    fontSize: 15,
    fontWeight: '900',
  },
  description: {
    color: colors.text.body,
    fontSize: 15,
    lineHeight: 22,
  },
  disabled: {
    opacity: 0.55,
  },
  doneButton: {
    alignItems: 'center',
    backgroundColor: colors.success.background,
    borderColor: colors.success.border,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 46,
  },
  doneButtonText: {
    color: colors.success.text,
    fontSize: 15,
    fontWeight: '900',
  },
  editButton: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.strong,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  editButtonText: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '900',
  },
  feedbackBox: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  feedbackTitle: {
    color: colors.text.primary,
    fontSize: 17,
    fontWeight: '900',
  },
  muted: {
    color: colors.text.tertiary,
    fontSize: 14,
    lineHeight: 20,
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
  secondaryButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.brand.primary,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  secondaryButtonText: {
    color: colors.text.inverted,
    fontSize: 14,
    fontWeight: '900',
  },
  section: {
    gap: 10,
    paddingTop: 4,
  },
  sectionLabel: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text.primary,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 34,
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
