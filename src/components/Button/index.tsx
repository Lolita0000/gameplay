import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
