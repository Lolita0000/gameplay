import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '@/global/styles/theme';
import { styles } from './styles';

type Props = {
  urlImage: string;
};

// Foto com "borda" em degradê (o gradiente fica atrás e a imagem é 3px menor).
export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
