import React, { createContext, useReducer, useContext } from 'react';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const initialState = {
  favorites: []
};
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return { ...state, favorites: state.favorites.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};
const FavoriteContext = createContext();
const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addFavorite = (item) => {
    dispatch({ type: ADD_FAVORITE, payload: item });
  };

  const removeFavorite = (itemId) => {
    dispatch({ type: REMOVE_FAVORITE, payload: itemId });
  };

  return (
    <FavoriteContext.Provider value={{ favorites: state.favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
const useFavorite = () => useContext(FavoriteContext);

export { FavoriteProvider, useFavorite };
