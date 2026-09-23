import { Image, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '@/global/styles/theme';
import { styles } from './styles';

type Props = {
  source: ImageSourcePropType;
};

export function Avatar({ source }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
      <Image source={source} style={styles.avatar} />
    </LinearGradient>
  );
}
