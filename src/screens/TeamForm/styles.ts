import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    gap: 14,
    maxWidth: 760,
    padding: 16,
    paddingBottom: 18,
    width: '100%',
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
  heroPanel: {
    backgroundColor: colors.surface.hero,
    borderRadius: 8,
    gap: 14,
    padding: 18,
  },
  heroPreview: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.surface.overlay,
    borderColor: colors.border.onDark,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    minHeight: 36,
    paddingHorizontal: 12,
  },
  heroPreviewDot: {
    borderRadius: 999,
    height: 10,
    width: 10,
  },
  heroPreviewText: {
    color: colors.text.inverted,
    fontSize: 12,
    fontWeight: '800',
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
    flexWrap: 'wrap',
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
  sectionTitle: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '900',
  },
  swatch: {
    alignItems: 'center',
    borderColor: colors.border.default,
    borderRadius: 999,
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  swatchInner: {
    borderRadius: 999,
    height: 28,
    width: 28,
  },
  swatchRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  swatchSelected: {
    borderColor: colors.brand.linkStrong,
  },
});
