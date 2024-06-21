import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

import { sampleList } from '../store/sampleData';

const FavoriteScreen = () => {
  const favoriteList = sampleList.filter((place) => place.is_favorite);

  const renderItem = ({ item }) => {
    // const favoriteList = item.filter((place) => place.is_favorite);
    return (
      <Card style={{ marginVertical: 5, marginHorizontal: 6 }}>
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
        </Card.Content>
      </Card>
    );

    // item.is_favorite ? (
    //   <>
    //     <Card style={{ marginVertical: 5, marginHorizontal: 6 }}>
    //       <Card.Cover source={{ uri: item.imgUrl }} />
    //       <Card.Content>
    //         <Text>{item.name}</Text>
    //         <View style={{ flexDirection: 'row', marginVertical: ':2' }}>
    //           <Text>{item.rating}</Text>
    //           <Rating
    //             type='custom'
    //             ratingCount={5}
    //             startingValue={item.rating}
    //             imageSize={15}
    //             style={{ alignItems: 'flex-start', marginHorizontal: 3 }}
    //             readonly
    //           />
    //         </View>
    //       </Card.Content>
    //     </Card>
    //   </>
    // ) : (
    //   <View>
    //     <Text>No favorite places yet</Text>
    //   </View>
    // );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default FavoriteScreen;

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
