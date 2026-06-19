import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 16,
  },
  cardHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
  },
  colorDot: {
    borderRadius: 999,
    height: 14,
    marginTop: 5,
    width: 14,
  },
  content: {
    backgroundColor: colors.surface.app,
    padding: 16,
    paddingBottom: 32,
  },
  description: {
    color: colors.text.body,
    fontSize: 14,
    lineHeight: 20,
  },
  emptyBox: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 14,
    padding: 28,
  },
  emptyText: {
    color: colors.text.tertiary,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    textAlign: 'center',
  },
  emptyTitle: {
    color: colors.text.primary,
    fontSize: 17,
    fontWeight: '800',
  },
  feedbackBox: {
    backgroundColor: colors.danger.background,
    borderColor: colors.danger.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    marginTop: 14,
    padding: 14,
  },
  feedbackTitle: {
    color: colors.danger.text,
    fontSize: 15,
    fontWeight: '800',
  },
  header: {
    gap: 14,
    marginBottom: 14,
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
    gap: 18,
    padding: 18,
  },
  heroTitle: {
    color: colors.text.inverted,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 36,
  },
  meta: {
    color: colors.text.tertiary,
    fontSize: 13,
    fontWeight: '700',
  },
  safeArea: {
    backgroundColor: colors.surface.app,
    flex: 1,
  },
  separator: {
    height: 12,
  },
  skeletonCard: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 16,
  },
  skeletonList: {
    gap: 12,
  },
  title: {
    color: colors.text.primary,
    flex: 1,
    fontSize: 19,
    fontWeight: '900',
    lineHeight: 25,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  titleStack: {
    flex: 1,
  },
});
