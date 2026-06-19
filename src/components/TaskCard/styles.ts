import { StyleSheet } from 'react-native';

import { colors } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface.card,
    borderColor: colors.border.default,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    padding: 16,
    paddingLeft: 18,
    position: 'relative',
    shadowColor: colors.shadow.card,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  content: {
    gap: 10,
  },
  description: {
    color: colors.text.secondary,
    fontSize: 14,
    lineHeight: 20,
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  metaText: {
    color: colors.text.tertiary,
    flex: 1,
    fontSize: 12,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.78,
  },
  statusAccent: {
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 4,
  },
  title: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 23,
  },
});
