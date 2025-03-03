import { Card } from "../Card/Card";
import { SimpleGrid, UnstyledButton } from "@mantine/core";
import { choiceCards } from "../../constants/choiceCards";
import { get3RandomCards } from "../../helpers/cardHelpers";
import { CardProps } from "../../types/CardProps";
import { useAppDispatch } from "../../state/hooks";
import { applyEffect } from "../../state/slices/gameSlice";

export const CardSelect = () => {
  const threeChoiceCards = get3RandomCards(choiceCards);
  const dispatch = useAppDispatch();

  const onCardSelect = (card: CardProps) => {
    dispatch(applyEffect(card));
  };

  return (
    <SimpleGrid cols={3} style={{ alignItems: "stretch" }}>
      {threeChoiceCards.map((card) => (
        <UnstyledButton
          key={card.title}
          onClick={() => {
            onCardSelect(card);
          }}
        >
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            category={card.category}
            effect={card.effect}
            cost={card.cost}
            effectValue={card.effectValue}
          />
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
};
