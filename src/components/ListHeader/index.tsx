import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
};

export function ListHeader({ title, subtitle, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
