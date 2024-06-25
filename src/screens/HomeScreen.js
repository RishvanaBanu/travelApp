import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';

import { sampleList } from '../store/sampleData';
import PlaceCard from '../components/placeCard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate('placeScreen', { item })}>
        <PlaceCard place={item} />
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={sampleList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
    marginTop: 20,
  },
});
