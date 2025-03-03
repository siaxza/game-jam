import { CardProps } from "../types/CardProps";
import {
  IconClipboardData,
  IconBuildingBank,
  IconChefHat,
  IconDeviceTv,
  IconConfetti,
  IconCar,
  IconBeach,
} from "@tabler/icons-react";

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
  {
    title: "Employer training",
    description:
      "Your employer offers you training, this will increase your skills and make you more valuable increasing your salary",
    icon: <IconClipboardData size={100} />,
    effect: "cash",
    effectValue: 100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Employer training",
    description:
      "Your employer offers you training, this will increase your skills and make you more valuable increasing your salary",
    icon: <IconClipboardData size={100} />,
    effect: "cash",
    effectValue: 100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Contribute to pension",
    description:
      "You decide to contribute to your pension, this will increase your pension pot",
    icon: <IconBuildingBank size={100} />,
    effect: "cash",
    effectValue: -100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Contribute to pension",
    description:
      "You decide to contribute to your pension, this will increase your pension pot",
    icon: <IconBuildingBank size={100} />,
    effect: "cash",
    effectValue: -100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Contribute to pension",
    description:
      "You decide to contribute to your pension, this will increase your pension pot",
    icon: <IconBuildingBank size={100} />,
    effect: "cash",
    effectValue: -100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Contribute to pension",
    description:
      "You decide to contribute to your pension, this will increase your pension pot",
    icon: <IconBuildingBank size={100} />,
    effect: "cash",
    effectValue: -100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Contribute to pension",
    description:
      "You decide to contribute to your pension, this will increase your pension pot",
    icon: <IconBuildingBank size={100} />,
    effect: "cash",
    effectValue: -100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Eat out",
    description: "You decide to eat out, this will make you happy",
    icon: <IconChefHat size={100} />,
    effect: "happiness",
    effectValue: 100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Buy a tv",
    description: "You decide to buy a tv, this will make you happy",
    icon: <IconDeviceTv size={100} />,
    effect: "happiness",
    effectValue: 100,
    category: "choice",
    cost: 100,
  },
  {
    title: "Buy a car",
    description: "You decide to buy a car, this will make you happy",
    icon: <IconCar size={100} />,
    effect: "happiness",
    effectValue: 100,
    category: "choice",
    cost: 1000,
  },
  {
    title: "Night out",
    description: "You decide to go on a night out, this will make you happy",
    icon: <IconConfetti size={100} />,
    effect: "happiness",
    effectValue: 100,
    category: "choice",
    cost: 100,
  },
];
