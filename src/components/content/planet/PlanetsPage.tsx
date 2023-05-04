import { useSelector } from "react-redux";
import styles from "./PlanetsPage.module.css";
import { planetsSelector } from "../../../store/planetReducer";
import { PlanetCard } from "./PlanetCard";

export const PlanetsPage = () => {
  const planets = useSelector(planetsSelector);
  console.log(planets);
  const planetsList = planets.map((element) => {
    return <PlanetCard name={element.name} />;
  });
  return (
    <div className={styles.content_wrapper}>
      <ul className={styles.planets}>{planetsList}</ul>
    </div>
  );
};
