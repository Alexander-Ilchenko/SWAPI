import { useDispatch, useSelector } from "react-redux";
import styles from "./PlanetsPage.module.css";
import { planetsSelector, setPlanets } from "../../../store/planetReducer";
import { PlanetCard } from "./PlanetCard";
import { useEffect, useState } from "react";
import { swapi } from "../../../api/swapi";
import classNames from "classnames";

export const PlanetsPage = () => {
  const planets = useSelector(planetsSelector);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const init = async () => {
      const rep = await swapi.getPlanets(page);
      const total = Math.ceil(rep.count / 10);
      setTotalPages(total);
      dispatch(setPlanets(rep.results));
    };
    init();
  }, [page]);

  const next = () => setPage((x) => x + 1);

  const back = () => setPage((x) => x - 1);

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.pagination}>
        {totalPages > 0 && (
          <button
            className={classNames(styles.previos, styles.btn)}
            disabled={page <= 1}
            onClick={back}
          ></button>
        )}

        {Array(totalPages)
          .fill(0)
          .map((_, idx) => {
            return (
              <button
                className={classNames(styles.page_number, styles.btn)}
                key={idx}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            );
          })}

        {totalPages > 0 && (
          <button
            className={classNames(styles.next, styles.btn)}
            disabled={page >= totalPages}
            onClick={next}
          >
            {" "}
          </button>
        )}
      </div>
      <ul className={styles.planets}>
        {planets.map((element) => {
          return <PlanetCard name={element.name} />;
        })}
      </ul>
    </div>
  );
};
