import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./components/content/home/Home";

import { Bookmarks } from "./components/content/bookmarks/Bookmarks";
import { HeroesPage } from "./components/content/hero/HeroesPage";
import { PlanetsPage } from "./components/content/planet/PlanetsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/heroes", element: <HeroesPage /> },
      { path: "/planets", element: <PlanetsPage /> },
      //   { path: "/planets/:id", element: <PlanetsPage /> },

      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);
