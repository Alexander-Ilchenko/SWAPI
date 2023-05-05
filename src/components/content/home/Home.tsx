import styles from "./Home.module.css";
import { SideCard } from "./SideCard";
import s from "./SideCard.module.css";
import { useState } from "react";

const changeBgDark = () => {
  document.body.style.backgroundImage = "url(darksideBG.jpg)";
};

const changeBgLight = () => {
  document.body.style.backgroundImage = "url(lightsideBG.jpg)";
};

// const [state] = useState({
//   dark: "/darksideBG.jpg",
// });

export const Home = () => {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.side}>
        <SideCard
          title="Light Side"
          click={changeBgLight}
          side={s.background_light}
        />
        <SideCard
          title="Dark Side"
          click={changeBgDark}
          side={s.background_dark}
        />
      </div>
    </div>
  );
};
