import { planetsReducer } from "./planetReducer";
import { heroesReducer } from "./heroReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {} from "react-redux";

const rootReducer = combineReducers({ heroesReducer, planetsReducer });
export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
