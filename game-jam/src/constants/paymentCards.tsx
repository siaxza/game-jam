import { IconCoinPound } from "@tabler/icons-react";
import { CardProps } from "../types/CardProps";

export const paymentCards: CardProps[] = [
  {
    title: "Get paid",
    description: "You have been paid a handsome sum of money",
    icon: <IconCoinPound size={100} />,
    effect: "cash",
    effectValue: 100,
    category: "payment",
  },
];
