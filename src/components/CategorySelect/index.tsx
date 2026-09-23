import { ScrollView } from 'react-native';

import { Category } from '@/components/Category';
import { categories } from '@/utils/categories';
import { styles } from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

// Lista horizontal de categorias. O estado fica na tela (quem usa decide o que fazer).
export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
