import classes from "././Card.module.css";
import { CardProps } from "../../types/CardProps";
import { Group, Paper, Pill, Text, useMantineTheme } from "@mantine/core";
import { IconCircleArrowUp } from "@tabler/icons-react";
import { EffectDisplay } from "../EffectDisplay/EffectDisplay";
import { motion } from "motion/react";
import { useAppSelector } from "../../state/hooks";

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
  const salary = useAppSelector((state) => state.game.salary);

  return (
    <motion.div style={{height: "100%" }} initial={{ y: 150 }}  animate={{ y: 0 }} 
    transition={{ 
      type: "spring", 
      delay: 0.2 * Math.random(), 
      stiffness: 300,           // Controls the spring stiffness
      damping: 30,              // Controls the smoothness of the transition
      restDelta: 0.001, 
      velocity: 2 }} >
    <Paper withBorder radius="md" className={classes.cardContainer} style={{height: "100%" }}>
      <div>
        <Group justify="end">
          <EffectDisplay effect={effect} effectValue={effectValue} />
        </Group>
        <h2 className={classes.title}>{title}</h2>
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
        <Pill>
          <span className={classes.footerCategory}>{category}</span>
        </Pill>
        <Text fw="bold" c={category === "payment" ? "green" : "red"}>
          {category === "payment" ? `+£${salary}` : cost ? `-£${cost}` : ""}
        </Text>
      </div>
    </Paper>
    </motion.div>
  );
};
