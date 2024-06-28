import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sampleList } from '../store/sampleData';
import PlaceCard from '../components/placeCard';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const favoriteList = sampleList.filter((place) => place.is_favorite);

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate('placeScreen', { item })}>
        <PlaceCard place={item} is_favoriteScreen={true} />
      </Pressable>
    );
  };

  const EmptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No favorite places added yet.</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};
export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
    marginTop: 20,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
