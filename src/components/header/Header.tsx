import styles from "./Header.module.css";
import { SearchField } from "./Search";
export const Header = () => {
  return (
    <header className="header">
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <h1>STAR WARS</h1>
        </div>
        <div className={styles.search}>
          <SearchField />
        </div>
      </div>
    </header>
  );
};
