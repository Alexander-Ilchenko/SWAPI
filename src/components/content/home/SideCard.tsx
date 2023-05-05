export const SideCard = (props) => {
  return (
    <div onClick={props.click} className={props.side}>
      <h3>{props.title}</h3>
    </div>
  );
};
