import { StyleSheet } from 'react-native';

import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  categoryLabel: {
    marginLeft: 24,
    marginTop: 36,
    marginBottom: 18,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  fieldLabel: {
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  descriptionHeader: {
    marginBottom: 12,
  },
  charLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  footer: {
    marginTop: 20,
  },
});
