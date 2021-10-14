import classes from "./CustomCard.module.css";

const CustomCard = (props) => {
  return (
    <div className={classes["custom-card"]}>
      <p>Have a good day!</p>
      <p>Nice to meet you</p>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default CustomCard;
