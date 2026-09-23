import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered = false }: Props) {
  return <View style={[styles.container, isCentered ? styles.centered : styles.default]} />;
}
