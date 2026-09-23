import { TextInput, TextInputProps } from 'react-native';

import { theme } from '@/global/styles/theme';
import { styles } from './styles';

// Campo pequeno de 2 dígitos (dia, mês, hora, minuto).
export function SmallInput({ style, ...rest }: TextInputProps) {
  return (
    <TextInput
      style={[styles.container, style]}
      keyboardType="numeric"
      maxLength={2}
      placeholderTextColor={theme.colors.highlight}
      {...rest}
    />
  );
}
