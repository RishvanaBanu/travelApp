import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Card, IconButton, MD3Colors } from 'react-native-paper';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { StateContext } from '../context/stateContext';

const PlaceCard = ({ place, is_favoriteScreen }) => {
  const { toggleFavorite } = useContext(StateContext);

  return (
    <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: `${place.imgUrl}` }} />
      <Card.Content>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.nameStyle}>{place.name}</Text>
            <View style={styles.ratingContainer}>
              <Text>{place.rating}</Text>
              <StarRatingDisplay
                starStyle={{ marginHorizontal: 0 }}
                style={{ marginHorizontal: 2 }}
                starSize={16}
                rating={place.rating}
              />
            </View>
          </View>
          {/* {!is_favoriteScreen && ( */}
          <IconButton
            icon={place.is_favorite ? 'heart' : 'heart-outline'}
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => toggleFavorite(place.id)}
          />
          {/* // )} */}
        </View>
        {!is_favoriteScreen && (
          <Text numberOfLines={2} style={styles.descStyle}>
            {place.description}
          </Text>
        )}
      </Card.Content>
    </Card>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  cardContainer: { marginVertical: 5, marginHorizontal: 7 },
  ratingContainer: { flexDirection: 'row' },
  nameStyle: { fontWeight: 'bold', letterSpacing: 1, marginVertical: 2 },
  ratingStyle: { alignplaces: 'flex-start', marginHorizontal: 3 },
  descStyle: { marginTop: -8, letterSpacing: 0.5 },
});
