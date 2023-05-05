import { useState, useEffect } from "react";

import "./App.css";
import { swapi } from "./api/swapi";
import { useDispatch, useSelector } from "react-redux";
import { heroSelector, setHeroes } from "./store/heroReducer";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { planetsSelector, setPlanets } from "./store/planetReducer";

function App() {
  // импортируем фуекцию диспатч из редакса
  const dispatch = useDispatch();
  // жизненый цикл компонента
  // useEffect(() => {
  //   const init = async () => {
  //     const rep = await swapi.getPeoples();
  //     dispatch(setHeroes(rep.results));
  //     const per = await swapi.getPlanets();
  //     dispatch(setPlanets(per.results));
  //   };
  //   init();
  // }, []);
  return (
    <div className="container">
      <Header />

      <div className="down">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
