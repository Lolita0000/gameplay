import { ComponentType } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';

import { theme } from '@/global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: ComponentType<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

// Card de categoria. Selecionado = opacidade cheia + checkbox vermelho.
export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      {/* gradiente de fora funciona como a borda do card */}
      <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {hasCheckBox && <View style={checked ? styles.checked : styles.check} />}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}
