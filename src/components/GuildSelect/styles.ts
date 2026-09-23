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
    paddingRight: 17,
    overflow: 'hidden',
  },
  image: {
    marginLeft: -1,
  },
  emptyImage: {
    width: 64,
    height: 68,
    marginLeft: -1,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  selectedBody: {
    flex: 1,
    marginLeft: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    marginTop: 4,
  },
});
