import { useDispatch, useSelector } from "react-redux";
import { heroSelector, setHeroes } from "../../../store/heroReducer";
import { HeroCard } from "./HeroCard/HeroCard";
import styles from "./HeroesPage.module.css";
import s from "./../planet/PlanetsPage.module.css";
import { useEffect, useState } from "react";
import { swapi } from "../../../api/swapi";
import classNames from "classnames";

export const HeroesPage = () => {
  const heroes = useSelector(heroSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const init = async () => {
      const rep = await swapi.getPeoples(page);
      const total = Math.ceil(rep.count / 10);
      setTotalPages(total);
      dispatch(setHeroes(rep.results));
    };
    init();
  }, [page]);

  const next = () => setPage((x) => x + 1);

  const back = () => setPage((x) => x - 1);

  return (
    <div className={styles.content_wrapper}>
      <div className={s.pagination}>
        {totalPages > 0 && (
          <button
            className={classNames(s.previos, s.btn)}
            disabled={page <= 1}
            onClick={back}
          ></button>
        )}

        {Array(totalPages)
          .fill(0)
          .map((_, idx) => {
            return (
              <button
                className={classNames(s.page_number, s.btn)}
                key={idx}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            );
          })}
        {totalPages > 0 && (
          <button
            className={classNames(s.next, s.btn)}
            disabled={page >= totalPages}
            onClick={next}
          ></button>
        )}
      </div>
      <ul className={styles.heroes}>
        {heroes.map((element) => {
          return <HeroCard name={element.name} key={element.name} />;
        })}
      </ul>
    </div>
  );
};
