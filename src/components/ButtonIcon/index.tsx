import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { DiscordIcon } from '@/assets/icons';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

// Botão vermelho com o ícone do Discord à esquerda, separado por uma linha.
export function ButtonIcon({ title, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} {...rest}>
      <View style={styles.iconWrapper}>
        <DiscordIcon width={24} height={18} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
