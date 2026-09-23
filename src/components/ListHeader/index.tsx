import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
};

export function ListHeader({ title, subtitle, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.caption}>{subtitle}</Text>
    </View>
  );
}
