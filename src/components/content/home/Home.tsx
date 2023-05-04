import styles from "./Home.module.css";
import { SideCard } from "./SideCard";
import s from "./SideCard.module.css";

export const Home = () => {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.side}>
        <SideCard title="Light Side" side={s.background_light} />
        <SideCard title="Dark Side" side={s.background_dark} />
      </div>
    </div>
  );
};
