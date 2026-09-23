import { StyleSheet } from 'react-native';

import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 25,
    overflow: 'hidden',
  },
  emptyImage: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
});
