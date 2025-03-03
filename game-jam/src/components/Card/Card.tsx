import classes from "././Card.module.css";
import { CardProps } from "../../types/CardProps";
import { Paper } from "@mantine/core";

export const Card = ({
  title,
  description,
  icon,
  category,
  cost,
}: CardProps) => {
  return (
    <Paper withBorder className={classes.cardContainer}>
      <div className={classes.titleContainer}>
        <span>{title}</span>
        <span>?</span>
      </div>
      <div className={classes.iconContainer}>{icon}</div>
      <div>{description}</div>
      <div className={classes.footerContainer}>
        <span className={classes.footerValue}>{category}</span>
        <span className={classes.footerValue}>{cost}</span>
      </div>
    </Paper>
  );
};
