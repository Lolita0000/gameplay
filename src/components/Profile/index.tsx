import { Text, View } from 'react-native';
import { Avatar } from '@/components/Avatar';
import { user } from '@/data/mock';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar source={user.avatar} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
