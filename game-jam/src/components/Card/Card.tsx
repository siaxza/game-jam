import classes from "././Card.module.css";
import { CardProps } from "../../types/CardProps";
import { Paper, useMantineTheme } from "@mantine/core";
import { IconCircleArrowUp } from "@tabler/icons-react";
import { EffectDisplay } from "../EffectDisplay/EffectDisplay";
import Title from "../Text/Title"

export const Card = ({
  title,
  description,
  icon,
  category,
  cost,
  effect,
  effectValue,
}: CardProps) => {
  const theme = useMantineTheme();

  const categoryColors = {
    starter: "var(--start-color)",
    choice: "var(--choice-color)",
    payment: "var(--payment-color)",
    event: "var(--event-color)",
  };

  return (
    <Paper withBorder radius="md" className={classes.cardContainerShine} style={{
      background: `linear-gradient(0deg, rgb(248, 247, 247) 0%, ${categoryColors[category]} 100%)`}}>
      <div className={classes.titleContainer}>
        <Title title={title}/>
        <EffectDisplay effect={effect} effectValue={effectValue} />
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
      <div className={classes.quanticoRegular}>{description}</div>
      <div className={classes.footerContainer}>
        <span className={classes.footerValue}>{category}</span>
        <span className={classes.footerValue}>{cost ? `${cost}💸` : ""}</span>
      </div>
    </Paper>
  );
};
