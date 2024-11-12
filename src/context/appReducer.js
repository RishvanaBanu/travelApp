export const AppReducer = (state, action) => {
  switch (action.type) {
    // case 'EDIT_PLACE':
    //   const updatedPlace = action.payload;
    //   const updatedPlaces = state.sampleList.map((place) => {
    //     if (place.id === updatedPlace.id) {
    //       return updatedPlace;
    //     }
    //     return place;
    //   });

    //   return {
    //     ...state
    //     place : updatedPlaces
    //   }

    case 'EDIT_PLACE': {
      const updatedPlace = action.payload;

      const updatedPlaces = state.sampleList.map((place) => {
        if (place.id == updatedPlace.id) {
          return (place.is_favorite = updatedPlace.is_favorite);
        }
        return place;
      });
      return {
        ...state,
        places: updatedPlaces,
      };
    }
    default:
      return state;
  }
};
