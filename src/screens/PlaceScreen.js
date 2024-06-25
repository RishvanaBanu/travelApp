import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const PlaceScreen = ({ route }) => {
  const { item } = route.params;
  console.log(item);

  return (
    <View>
      <Image
        source={{ uri: item.imgUrl }}
        style={{ height: '65%', width: '100%' }}
      />
      <Text>{item.name}</Text>

      <Text>{item.rating}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default PlaceScreen;

const styles = StyleSheet.create({});
