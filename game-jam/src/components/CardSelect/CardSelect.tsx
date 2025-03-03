import { Card } from "../Card/Card";
import { Grid, SimpleGrid, UnstyledButton } from "@mantine/core";
import { CardProps } from "../../types/CardProps";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { applyEffect } from "../../state/slices/gameSlice";
import { drawNextCards } from "../../state/slices/deckSlice";

export const CardSelect = () => {
  const dispatch = useAppDispatch();
  const cardsInHand = useAppSelector((state) => state.deck.cardsInHand);
  const currentStage = useAppSelector((state) => state.game.currentStage);

  const onCardSelect = (card: CardProps) => {
    dispatch(applyEffect(card));
    dispatch(drawNextCards(currentStage));
  };

  return (
    <>
      {currentStage === "payment" ? (
        <Grid>
          <Grid.Col span={4} offset={4}>
            <UnstyledButton
              onClick={() => {
                onCardSelect(cardsInHand[0]);
              }}
            >
              <Card
                title={cardsInHand[0].title}
                description={cardsInHand[0].description}
                icon={cardsInHand[0].icon}
                category={cardsInHand[0].category}
                effect={cardsInHand[0].effect}
                cost={cardsInHand[0].cost}
                effectValue={cardsInHand[0].effectValue}
              />
            </UnstyledButton>
          </Grid.Col>
        </Grid>
      ) : currentStage === "event" ? (
        <Grid>
          <Grid.Col span={4} offset={4}>
            <UnstyledButton
              onClick={() => {
                onCardSelect(cardsInHand[0]);
              }}
            >
              <Card
                title={cardsInHand[0].title}
                description={cardsInHand[0].description}
                icon={cardsInHand[0].icon}
                category={cardsInHand[0].category}
                effect={cardsInHand[0].effect}
                cost={cardsInHand[0].cost}
                effectValue={cardsInHand[0].effectValue}
              />
            </UnstyledButton>
          </Grid.Col>
        </Grid>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 3 }} style={{ alignItems: "stretch" }}>
          {cardsInHand.map((card) => (
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
      )}
    </>
  );
};
