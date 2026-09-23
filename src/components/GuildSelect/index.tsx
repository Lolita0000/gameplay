import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '@/components/GuildIcon';
import { Guild } from '@/data/mock';
import { theme } from '@/global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  guild?: Guild;
};

export function GuildSelect({ guild, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View style={styles.container}>
        {guild ? (
          <View style={styles.image}>
            <GuildIcon source={guild.image} />
          </View>
        ) : (
          <View style={styles.emptyImage} />
        )}

        {guild ? (
          <View style={styles.selectedBody}>
            <Text style={styles.label}>{guild.name}</Text>
            <Text style={styles.subtitle}>{guild.game}</Text>
          </View>
        ) : (
          <View style={styles.body}>
            <Text style={styles.label}>Selecione um servidor</Text>
          </View>
        )}

        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
      </View>
    </TouchableOpacity>
  );
}
