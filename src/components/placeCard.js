import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const PlaceCard = ({ place, is_favorite }) => {
  const navigation = useNavigation();

  return (
    <Card
      style={styles.cardContainer}
      onPress={() => navigation.navigate('placeScreen')}
    >
      <Card.Cover source={{ uri: `${place.imgUrl}` }} />
      <Card.Content>
        <Text style={styles.nameStyle}>{place.name}</Text>
        <View style={styles.ratingContainer}>
          <Text>{place.rating}</Text>
          <Rating
            type='custom'
            ratingCount={5}
            startingValue={place.rating}
            imageSize={15}
            style={styles.ratingStyle}
            readonly
          />
        </View>
        {!is_favorite && (
          <Text style={styles.descStyle}>{place.description}</Text>
        )}
      </Card.Content>
    </Card>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  cardContainer: { marginVertical: 5, marginHorizontal: 7 },
  ratingContainer: { flexDirection: 'row', marginVertical: 2 },
  nameStyle: { fontWeight: 'bold', letterSpacing: 1, marginVertical: 2 },
  ratingStyle: { alignplaces: 'flex-start', marginHorizontal: 3 },
  descStyle: { marginVertical: 3, letterSpacing: 0.5 },
});