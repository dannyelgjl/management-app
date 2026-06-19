import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  clearButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
  },
  clearButtonText: {
    color: colors.brand.link,
    fontSize: 13,
    fontWeight: '800',
  },
  content: {
    backgroundColor: colors.surface.app,
    gap: 0,
    padding: 16,
    paddingBottom: 32,
  },
  emptyBox: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 16,
    padding: 24,
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
  eyebrow: {
    color: colors.text.tertiary,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  feedbackBox: {
    backgroundColor: colors.danger.background,
    borderColor: colors.danger.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 14,
  },
  feedbackText: {
    color: colors.danger.textStrong,
    fontSize: 13,
    lineHeight: 18,
  },
  feedbackTitle: {
    color: colors.danger.text,
    fontSize: 15,
    fontWeight: '800',
  },
  filterChip: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 34,
    paddingHorizontal: 12,
  },
  filterChipActive: {
    backgroundColor: colors.brand.primary,
    borderColor: colors.brand.primary,
  },
  filterChipText: {
    color: colors.text.body,
    fontSize: 13,
    fontWeight: '800',
  },
  filterChipTextActive: {
    color: colors.text.inverted,
  },
  filterRow: {
    gap: 8,
    paddingRight: 16,
  },
  header: {
    gap: 14,
    marginBottom: 16,
  },
  loadingBox: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  pressed: {
    opacity: 0.75,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: colors.brand.primary,
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 42,
    paddingHorizontal: 18,
  },
  primaryButtonText: {
    color: colors.text.inverted,
    fontSize: 15,
    fontWeight: '900',
  },
  resultLabel: {
    color: colors.text.tertiary,
    fontSize: 13,
    fontWeight: '700',
  },
  safeArea: {
    backgroundColor: colors.surface.app,
    flex: 1,
  },
  searchInput: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.strong,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.text.primary,
    fontSize: 15,
    minHeight: 46,
    paddingHorizontal: 14,
  },
  secondaryButton: {
    alignSelf: 'flex-start',
    backgroundColor: colors.surface.card,
    borderColor: colors.danger.border,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  secondaryButtonText: {
    color: colors.danger.text,
    fontSize: 13,
    fontWeight: '800',
  },
  separator: {
    height: 10,
  },
  statusFilter: {
    alignItems: 'center',
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 34,
    paddingHorizontal: 12,
  },
  statusFilterActive: {
    backgroundColor: colors.brand.subtle,
    borderColor: colors.brand.link,
  },
  statusFilterText: {
    color: colors.text.body,
    fontSize: 13,
    fontWeight: '800',
  },
  statusFilterTextActive: {
    color: colors.brand.linkStrong,
  },
  summaryBox: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 12,
  },
  summaryBoxWide: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1.4,
    padding: 12,
  },
  summaryLabel: {
    color: colors.text.tertiary,
    fontSize: 12,
    fontWeight: '800',
    marginTop: 3,
    textTransform: 'uppercase',
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 10,
  },
  summaryValue: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: '900',
  },
  title: {
    color: colors.text.primary,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
