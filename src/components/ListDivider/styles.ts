import { StyleSheet } from 'react-native';

import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '78%',
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.secondary40,
  },
  centered: {
    marginVertical: 12,
  },
  default: {
    marginTop: 2,
    marginBottom: 31,
  },
});
