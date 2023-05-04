import styles from "./HeroCard.module.css";
export const HeroCard = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.wruper}>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};
