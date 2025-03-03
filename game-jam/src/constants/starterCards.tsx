import { CardProps } from "../types/CardProps";
import { IconPlayerPlay, IconChartArrowsVertical } from "@tabler/icons-react";

export const starterCards: CardProps[] = [
  {
    title: "Pension Boost",
    description: "Add a one-off boost to your pension",
    icon: <IconChartArrowsVertical size={100} />,
    effect: "pension",
    effectValue: 5000,
    category: "starter",
    cost: 0,
  },
  {
    title: "Salary Boost",
    description: "Add a monthly increase to your salary",
    icon: <IconPlayerPlay size={100} />,
    effect: "cash",
    effectValue: 300,
    category: "starter",
    cost: 0,
  },
  {
    title: "Annual Leave Boost",
    description: "Add a one-off boost to your happiness",
    icon: <IconChartArrowsVertical size={100} />,
    effect: "happiness",
    effectValue: 300,
    category: "starter",
    cost: 0,
  },
];
