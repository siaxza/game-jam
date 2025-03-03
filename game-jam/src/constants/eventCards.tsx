import { CardProps } from "../types/CardProps";
import { IconBadge4k } from "@tabler/icons-react";

export const eventCards: CardProps[] = [
  {
    title: "Employer Pension Contribution",
    description: "Your employer has contributed to your pension",
    icon: <IconBadge4k stroke={2} size={100} />,
    effect: "pension",
    effectValue: 100,
    category: "event"
  },
  {
    title: "Salary Raise",
    description: "Your employer has contributed to your pension",
    icon: <IconBadge4k stroke={2} size={100} />,
    effect: "cash",
    effectValue: 300,
    category: "event"
  },
];
