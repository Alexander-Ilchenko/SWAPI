import { planetsReducer } from "./planetReducer";
import { heroesReducer } from "./heroReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {} from "react-redux";

// создаем редусер(функция которая получает на вход екшн{тип,нагрузка})

const rootReducer = combineReducers({ heroesReducer, planetsReducer });
// создаем стор
export const store = configureStore({ reducer: rootReducer });
// создаем тип рутстате
export type RootState = ReturnType<typeof store.getState>;
