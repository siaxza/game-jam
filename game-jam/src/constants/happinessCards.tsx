import { CardProps } from "../types/CardProps";
import { IconMoodSmile } from "@tabler/icons-react";

export const happinessCards: CardProps[] = [
  {
    title: "Go on holiday",
    description: "Go on holiday to somewhere nice",
    icon: <IconMoodSmile size={100} />,
    effect: "happiness",
    category: "choice",
    cost: 100,
  },
];
