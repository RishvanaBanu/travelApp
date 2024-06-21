import { FlatList, Text, View, StyleSheet } from 'react-native';

import { sampleList } from '../store/sampleData';
import PlaceCard from '../components/placeCard';

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return <PlaceCard place={item} />;
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
