import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  content: {
    gap: 14,
    padding: 16,
    paddingBottom: 18,
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
  field: {
    gap: 9,
  },
  footer: {
    backgroundColor: colors.surface.app,
    borderTopColor: colors.border.default,
    borderTopWidth: 1,
    gap: 10,
    padding: 16,
    paddingTop: 12,
  },
  heroBackButton: {
    backgroundColor: colors.surface.overlay,
    borderColor: colors.border.onDark,
  },
  heroBackButtonText: {
    color: colors.text.inverted,
  },
  heroEyebrow: {
    color: colors.neutral[200],
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heroMeta: {
    backgroundColor: colors.surface.overlay,
    borderColor: colors.border.onDark,
    borderRadius: 999,
    borderWidth: 1,
    color: colors.text.inverted,
    fontSize: 12,
    fontWeight: '800',
    minHeight: 34,
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  heroMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  heroPanel: {
    backgroundColor: colors.surface.hero,
    borderRadius: 8,
    gap: 14,
    padding: 18,
  },
  heroTitle: {
    color: colors.text.inverted,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 36,
  },
  heroTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  keyboard: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: colors.surface.app,
    flex: 1,
  },
  sectionCard: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    gap: 16,
    padding: 18,
    shadowColor: colors.shadow.card,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '900',
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
});
