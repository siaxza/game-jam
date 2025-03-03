import { CardProps } from "../types/CardProps";
import { IconUmbrella } from "@tabler/icons-react";

export const pensionCards: CardProps[] = [
  {
    title: "Contribute",
    description: "Contribute to your pension",
    icon: <IconUmbrella size={100} />,
    category: "pension",
    cost: 100,
  },
];
