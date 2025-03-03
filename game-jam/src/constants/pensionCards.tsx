import { CardProps } from "../types/CardProps";
import { IconUmbrella } from "@tabler/icons-react";

export const pensionCards: CardProps[] = [
  {
    title: "Contribute",
    description: "Contribute to your pension",
    icon: <IconUmbrella size={100} />,
    effect: "pension",
    category: "choice",
    cost: 100,
  },
];
