import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Planet } from "../api/swapi.models";
import { RootState } from "./reducer";

type InitialState = {
  planets: Planet[];
};
const initialState: InitialState = {
  planets: [],
};
const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planet[]>) => ({
      ...state,
      planets: action.payload,
    }),
  },
});
export const planetsReducer = planetsSlice.reducer;
export const { setPlanets } = planetsSlice.actions;
const selectPlanets = (state: RootState) => state.planetsReducer;
export const planetsSelector = createSelector(
  [selectPlanets],
  (state) => state.planets
);
