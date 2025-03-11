import { Card } from "../Card/Card";
import { Grid, SimpleGrid, UnstyledButton } from "@mantine/core";
import { CardProps } from "../../types/CardProps";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { applyEffect } from "../../state/slices/gameSlice";
import { drawNextCards } from "../../state/slices/deckSlice";
import useSound from "use-sound";
import shuffle from "../../riffle.mp3";
import woosh from "../../woosh.mp3";

import { motion } from "motion/react";

export const CardSelect = () => {
  const dispatch = useAppDispatch();
  const cardsInHand = useAppSelector((state) => state.deck.cardsInHand);
  const currentStage = useAppSelector((state) => state.game.currentStage);

  const onCardSelect = (card: CardProps) => {
    dispatch(applyEffect(card));
    dispatch(drawNextCards(currentStage));
  };
  const [play] = useSound(shuffle);
  const [playWoosh] = useSound(woosh);

  return (
    <>
      {currentStage === "payment" ? (
        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }} offset={{ base: 0, sm: 4 }}>
            <motion.div
              exit={{ opacity: 0 }}
              whileTap={{
                scale: 1.1,
                rotate: 4,
                // ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <UnstyledButton
                onClick={() => {
                  onCardSelect(cardsInHand[0]);
                }}
                style={{ width: "100%" }}
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
            </motion.div>
          </Grid.Col>
        </Grid>
      ) : currentStage === "event" ? (
        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }} offset={{ base: 0, sm: 4 }}>
            <motion.div
              whileTap={{
                scale: 1.1,
                rotate: 5,
                // ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <UnstyledButton
                onClick={() => {
                  onCardSelect(cardsInHand[0]);
                  play();
                }}
                style={{ height: "100%", width: "100%" }}
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
            </motion.div>
          </Grid.Col>
        </Grid>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 3 }} style={{ alignItems: "stretch" }}>
          {cardsInHand.map((card) => (
            <motion.div
              whileTap={{
                scale: 1.1,
                rotate: 4,
                // , ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <UnstyledButton
                key={card.title}
                onClick={() => {
                  onCardSelect(card);
                  playWoosh();
                }}
                style={{ height: "100%", width: "100%" }}
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
            </motion.div>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
