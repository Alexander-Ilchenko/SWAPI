import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Hero } from "../api/swapi.models";
import { RootState } from "./reducer";

type InitialState = {
  heroes: Hero[];
};
const initialState: InitialState = {
  heroes: [],
};
const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<Hero[]>) => ({
      ...state,
      heroes: action.payload,
    }),
  },
});
export const heroesReducer = heroesSlice.reducer;
export const { setHeroes } = heroesSlice.actions;
const selectHeroes = (state: RootState) => state.heroesReducer;
export const heroSelector = createSelector(
  [selectHeroes],
  (state) => state.heroes
);
