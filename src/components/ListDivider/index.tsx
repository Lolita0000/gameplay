import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean;
};

// Linha entre itens da lista. "isCentered" = espaçamento igual em cima e embaixo.
export function ListDivider({ isCentered = false }: Props) {
  return <View style={[styles.container, isCentered ? styles.centered : styles.default]} />;
}
