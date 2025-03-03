import { CardProps } from "../types/CardProps";

export const getRandomCard = (cards: CardProps[]) => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

export const get3RandomCards = (cards: CardProps[]) => {
  return [getRandomCard(cards), getRandomCard(cards), getRandomCard(cards)];
};
