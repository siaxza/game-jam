import { CardProps } from "../types/CardProps";
import { IconBeach } from "@tabler/icons-react";

// https://tablericons.com
export const choiceCards: CardProps[] = [
  {
    title: "Go on holiday",
    description: "Go on holiday to somewhere nice",
    icon: <IconBeach size={100} />,
    effect: "happiness",
    effectValue: 100,
    category: "choice",
    cost: 100,
  },
];
