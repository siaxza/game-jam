import { IconMoodSmile, IconPigMoney, IconUmbrella } from "@tabler/icons-react";
import { CardProps } from "../types/CardProps";

export const starterCards: CardProps[] = [
  {
    title: "Salary Boost",
    description: "Add a monthly increase to your salary",
    icon: <IconPigMoney size={100} />,
    effect: "salary",
    effectValue: 300,
    category: "starter",
    cost: 0,
  },
  {
    title: "Pension Boost",
    description: "Add a one-off boost to your pension",
    icon: <IconUmbrella size={100} />,
    effect: "pension",
    effectValue: 5000,
    category: "starter",
    cost: 0,
  },
  {
    title: "Happiness Boost",
    description: "Add a one-off boost to your happiness",
    icon: <IconMoodSmile size={100} />,
    effect: "happiness",
    effectValue: 25,
    category: "starter",
    cost: 0,
  },
];
