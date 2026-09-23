import { Text, View } from 'react-native';
import { Avatar } from '@/components/Avatar';
import { MemberData } from '@/data/mock';
import { theme } from '@/global/styles/theme';
import { styles } from './styles';

type Props = {
  data: MemberData;
};

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar source={data.avatar} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? theme.colors.on : theme.colors.primary },
            ]}
          />
          <Text style={styles.nameStatus}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}
