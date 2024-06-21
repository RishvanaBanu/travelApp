import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

import { sampleList } from '../store/sampleData';

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <Card style={{ marginVertical: 5, marginHorizontal: 7 }}>
        <Card.Cover source={{ uri: item.imgUrl }} />
        <Card.Content>
          <Text>{item.name}</Text>
          <View style={{ flexDirection: 'row', marginVertical: ':2' }}>
            <Text>{item.rating}</Text>
            <Rating
              type='custom'
              ratingCount={5}
              startingValue={item.rating}
              imageSize={15}
              style={{ alignItems: 'flex-start', marginHorizontal: 3 }}
              readonly
            />
          </View>
          <Text>{item.description}</Text>
        </Card.Content>
      </Card>
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
