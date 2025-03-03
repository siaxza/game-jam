import classes from "././Card.module.css";
import { CardProps } from "../../types/CardProps";
import { Paper, useMantineTheme } from "@mantine/core";
import { IconCircleArrowUp } from "@tabler/icons-react";

export const Card = ({
  title,
  description,
  icon,
  category,
  cost,
}: CardProps) => {
  const theme = useMantineTheme();

  return (
    <Paper withBorder radius="md" className={classes.cardContainer}>
      <div className={classes.titleContainer}>
        <span>{title}</span>
        <span>?</span>
      </div>
      <div className={classes.iconContainer}>
        {icon}
        {category === "starter" && (
          <IconCircleArrowUp
            size={40}
            stroke={3}
            color={theme.colors.green[6]}
          />
        )}
      </div>
      <div>{description}</div>
      <div className={classes.footerContainer}>
        <span className={classes.footerValue}>{category}</span>
        <span className={classes.footerValue}>{cost + `💸`}</span>
      </div>
    </Paper>
  );
};
