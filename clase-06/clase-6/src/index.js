import { FlatList, SafeAreaView, View } from 'react-native';

import { CategoryItem, Header } from './components';
import CATEGORIES from './constants/data/categories.json';
import { styles } from './styles';

export default function App() {
  const onSelectCategory = (id) => {
    console.warn(id);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Categories" />
        <FlatList
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryItem {...item} onSelectCategory={onSelectCategory} />
          )}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
