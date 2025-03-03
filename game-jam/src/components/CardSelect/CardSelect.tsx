import { Card } from "../Card/Card";
import { SimpleGrid, UnstyledButton } from "@mantine/core";
import { choiceCards } from "../../constants/choiceCards";
import { get3RandomCards } from "../../helpers/cardHelpers";

export const CardSelect = () => {
  const threeChoiceCards = get3RandomCards(choiceCards);
  return (
    <SimpleGrid cols={3} style={{ alignItems: "stretch" }}>
      {threeChoiceCards.map((card) => (
        <UnstyledButton key={card.title}>
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
