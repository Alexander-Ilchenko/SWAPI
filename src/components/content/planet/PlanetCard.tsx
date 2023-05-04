import styles from "./PlanetCard.module.css";
export const PlanetCard = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.wruper}>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};
