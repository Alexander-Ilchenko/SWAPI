import { useSelector } from "react-redux";
import { heroSelector } from "../../../store/heroReducer";
import { HeroCard } from "./HeroCard/HeroCard";
import styles from "./HeroesPage.module.css";

export const HeroesPage = () => {
  const heroes = useSelector(heroSelector);

  const heroList = heroes.map((element) => {
    return <HeroCard name={element.name} />;
  });

  return (
    <div className={styles.content_wrapper}>
      <ul className={styles.heroes}> {heroList} </ul>
    </div>
  );
};
