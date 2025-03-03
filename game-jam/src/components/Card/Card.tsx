import classes from "././Card.module.css";
import { CardProps } from "../../types/CardProps";

export const Card = ({
  title,
  description,
  icon,
  category,
  cost,
}: CardProps) => {
  return (
    <div className={classes.cardContainerShine}>
      <div className={classes.titleContainer}>
        <span>{title}</span>
        <span>?</span>
      </div>
      <div className={classes.iconContainer}>{icon}</div>
      <div>{description}</div>
      <div className={classes.footerContainer}>
        <span className={classes.footerValue}>{category}</span>
        <span className={classes.footerValue}>{cost+`💸`}</span>
      </div>
    </div>
  );
};
