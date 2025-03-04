import { IconTrophy } from "@tabler/icons-react";
import { CardProps } from "../types/CardProps";

export const paymentCards: CardProps[] = [
    {
      title: "Congratulations!",
      description: "You have won the lottery!",
      icon: <IconTrophy size={100} />,
      effect: "lotto",
      effectValue: 0,
      category: "payment",
    },
  ];