import { Image, View } from 'react-native';

import { DiscordIcon } from '@/assets/icons';
import { styles } from './styles';

type Props = {
  uri?: string;
};

// Ícone do servidor. Sem imagem, mostra o logo do Discord (igual ao app do Discord).
export function GuildIcon({ uri }: Props) {
  return (
    <View style={styles.container}>
      {uri ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordIcon width={40} height={40} />
      )}
    </View>
  );
}
