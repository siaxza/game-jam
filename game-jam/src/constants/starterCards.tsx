import { CardProps } from "../types/CardProps";
import { IconUmbrella } from "@tabler/icons-react";

export const starterCards: CardProps[] = [
  {
    title: "Contribute",
    description: "Contribute to your pension",
    icon: <IconUmbrella size={100} />,
    effect: "pension",
    effectValue: 100,
    category: "starter",
    cost: 100,
  },
];
