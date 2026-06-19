import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  actions: {
    gap: 10,
  },
  card: {
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
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  content: {
    gap: 14,
    padding: 16,
    paddingBottom: 32,
  },
  date: {
    color: colors.text.tertiary,
    fontSize: 13,
    fontWeight: '800',
  },
  description: {
    color: colors.text.body,
    fontSize: 15,
    lineHeight: 22,
  },
  descriptionBlock: {
    borderTopColor: colors.border.muted,
    borderTopWidth: 1,
    paddingTop: 16,
  },
  descriptionSkeleton: {
    gap: 8,
  },
  detailHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
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
  safeArea: {
    backgroundColor: colors.surface.app,
    flex: 1,
  },
  section: {
    borderTopColor: colors.border.muted,
    borderTopWidth: 1,
    gap: 10,
    paddingTop: 16,
  },
  sectionLabel: {
    color: colors.text.tertiary,
    fontSize: 12,
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
