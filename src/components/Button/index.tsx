import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { globalStyles } from '@/global/styles/global';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={[globalStyles.button, styles.container, style]} activeOpacity={0.8} {...rest}>
      <Text style={globalStyles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
