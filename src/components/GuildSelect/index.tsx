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
        {guild ? <GuildIcon uri={guild.icon} /> : <View style={styles.emptyImage} />}

        <View style={styles.body}>
          <Text style={styles.label}>{guild ? guild.name : 'Selecione um servidor'}</Text>
        </View>

        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
      </View>
    </TouchableOpacity>
  );
}
