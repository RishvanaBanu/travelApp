import { createContext, useReducer, useState, useEffect } from 'react';
import { sampleList } from '../store/sampleData';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppReducer from './appReducer';

const initialState = sampleList;
const FAVORITES_KEY = '@favorite_places';

export const StateContext = createContext([]);

export const StateProvider = ({ children }) => {
  const [places, setPlaces] = useState(sampleList);
  // const [state, dispatch] = useReducer(AppReducer, initialState);

  // const editPlace = (place) => {
  //   dispatch({ type: 'EDIT_PLACE', payload: place });
  // };

  // Load favorites from AsyncStorage on mount
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
          setPlaces(JSON.parse(storedFavorites));
        } else {
          setPlaces(sampleList); // Set to sample data if no favorites found
        }
      } catch (error) {
        console.error('Failed to load favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  // Save favorites to AsyncStorage whenever they change
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(places));
      } catch (error) {
        console.error('Failed to save favorites:', error);
      }
    };

    saveFavorites();
  }, [places]);

  const toggleFavorite = (placeId) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === placeId
          ? { ...place, is_favorite: !place.is_favorite }
          : place
      )
    );
  };
  // const toggleFavorite = (placeId) => {
  //   setPlaces((prevPlaces) =>
  //     prevPlaces.map((place) =>
  //       place.id === placeId
  //         ? { ...place, is_favorite: !place.is_favorite }
  //         : place
  //     )
  //   );
  // };

  return (
    <StateContext.Provider value={{ places, toggleFavorite }}>
      {children}
    </StateContext.Provider>
  );
};
