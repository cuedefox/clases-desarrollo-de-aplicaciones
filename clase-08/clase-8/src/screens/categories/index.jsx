import { FlatList, SafeAreaView, View, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';
import useOrientation from '../../hook/useOrientation';
import { ORIENTATION } from '../../constants/orientation';

function Categories({ onSelectCategory }) {
  const orientation = useOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({ categoryId: item.id, color: item.backgroundColor })
              }
              style={
                orientation == ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}
              }
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
