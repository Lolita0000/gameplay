import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export function TextArea({ style, ...rest }: TextInputProps) {
  return <TextInput style={[styles.container, style]} multiline {...rest} />;
}
