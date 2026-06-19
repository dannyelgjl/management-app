import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 16,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  date: {
    color: colors.text.secondary,
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    color: colors.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.78,
  },
  teamCount: {
    color: colors.text.tertiary,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.text.primary,
    flex: 1,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 22,
  },
});
