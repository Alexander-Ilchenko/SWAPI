import styles from "./SideCard.module.css";
export const SideCard = (props) => {
  return (
    <div className={props.side}>
      <h3>{props.title}</h3>
    </div>
  );
};
