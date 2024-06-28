import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import MapView from 'react-native-maps';

const PlaceScreen = ({ route }) => {
  const { item } = route.params;
  // console.log(item);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: item.imgUrl }}
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
        }}
        resizeMode='contain'
      />
      <View style={{ marginHorizontal: 6, marginTop: 12 }}>
        <Text>{item.name}</Text>
        <View style={{ flexDirection: 'row', marginVertical: 2 }}>
          <Text>{item.rating}</Text>
          <StarRatingDisplay
            starSize={17}
            starStyle={{ marginHorizontal: 0 }}
            style={{ marginHorizontal: 3 }}
            rating={item.rating}
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
