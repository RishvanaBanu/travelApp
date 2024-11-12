import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import StarRating, { StarRatingDisplay } from 'react-native-star-rating-widget';
import MapView from 'react-native-maps';

const PlaceScreen = ({ route }) => {
  const { item } = route.params;
  // console.log(item);

  const [rating, setRating] = useState(0);
  // console.log('rating', rating);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: item.imgUrl }}
        style={{
          flex: 0.5,
          width: undefined,
          height: undefined,
        }}
        resizeMode='contain'
      />
      <View style={{ marginHorizontal: 6, marginTop: 12 }}>
        <Text>{item.name}</Text>
        <View style={{ flexDirection: 'row', marginVertical: 2 }}>
          <Text>{rating}</Text>
          <StarRating
            starSize={17}
            starStyle={{ marginHorizontal: 0 }}
            style={{ marginHorizontal: 3 }}
            rating={rating}
            onChange={(e) => setRating(e)}
          />
        </View>
        <Text>{item.description}</Text>
      </View>
      {/* <View style={{ justifyContent: 'center' }}>
        <MapView
          region={{
            latitude: 27.175142,
            longitude: 78.042442,
            latitudeDelta: 0.0252,
            longitudeDelta: 0.0621,
          }}
          style={{ height: 400, width: 500, alignSelf: 'center' }}
        />
      </View> */}
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({});
