import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    games: [],
    cateogories: [],
    selectedCategory: [],
    favorites: [],
    filtered: [],
  },
  reducers: {
    setData: (state, action) => {
      let games = action.payload.data.games;
      let categories = [
        { id: 7, nameKey: "Favorites" },
        ...action.payload.data.categories,
      ];

      state.games = [...games];
      state.categories = [...categories];
    },
    selectedCategoryGames: (state, action) => {
      let category = action.payload.filteredGames;
      state.selectedCategory = [...category];
      state.filtered = [...category];
    },
    filterGamesBySearch: (state, action) => {
      let term = action.payload.searchTerm;

      state.selectedCategory = [
        ...state.filtered.filter((game) =>
          game.name.toLowerCase().includes(term)
        ),
      ];
    },
    selectedFavoritesGames: (state, action) => {
      state.favorites = [...state.favorites, action.payload.game];
    },
    deleteFromFavourites: (state, action) => {
      const deleteItem = state.favorites.findIndex(
        (item) => action.payload.gameId === item.id
      );
      state.favorites = [
        ...state.favorites.slice(0, deleteItem),
        ...state.favorites.slice(deleteItem + 1),
      ];
    },
  },
});

//export actions
export const {
  setData,
  selectedCategoryGames,
  filterGamesBySearch,
  selectedFavoritesGames,
  deleteFromFavourites,
} = appSlice.actions;

//select state properties
export const selectCategories = (state) => state.app.categories;
export const selectGames = (state) => state.app.games;
export const selectedCategory = (state) => state.app.selectedCategory;
export const selectedFavorites = (state) => state.app.favorites;

export default appSlice.reducer;
