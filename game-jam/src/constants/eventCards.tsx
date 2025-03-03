import { CardProps } from "../types/CardProps";
import { IconBabyCarriage, IconBriefcase2, IconCircleKey, IconCoins, IconHeartBroken, IconHome, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

export const eventCards: CardProps[] = [
  {
    title: "Employer Pension Contribution",
    description: "Your employer has contributed to your pension",
    icon: <IconBriefcase2 size={100} />,
    effect: "pension",
    effectValue: 100,
    category: "event"
  },
  {
    title: "Salary Raise",
    description: "Your employer has contributed to your pension",
    icon: <IconCoins size={100} />,
    effect: "cash",
    effectValue: 300,
    category: "event"
  },
  {
    title: "Market Crash",
    description: "The market has crashed, your pension has lost value",
    icon: <IconTrendingDown size={100} />,
    effect: "pension",
    effectValue: -1000,
    category: "event"
  },
  {
    title: "Market Increase",
    description: "The market has increased, your pension has gained value",
    icon: <IconTrendingUp size={100} />,
    effect: "pension",
    effectValue: 1000,
    category: "event"
  },
  {
    title: "Go To Jail",
    description: "You've been put in jail, your cash has been reduced",
    icon: <IconCircleKey size={100} />,
    effect: "cash",
    effectValue: -2000,
    category: "event"
  },
  {
    title: "Divorce",
    description: "You're now divorced, your pension has reduced",
    icon: <IconHeartBroken size={100} />,
    effect: "pension",
    effectValue: -2000,
    category: "event"
  },
  {
    title: "New Born",
    description: "You now have a child, your happiness has increased but your cash has decreased",
    icon: <IconBabyCarriage size={100} />,
    effect: "happiness",
    effectValue: 100,
    category: "event",
    cost: 1000
  },
  {
    title: "Mortgage",
    description: "You have a mortgage, your cash has decreased",
    icon: <IconHome size={100} />,
    effect: "cash",
    effectValue: -500,
    category: "event",
  },
];
