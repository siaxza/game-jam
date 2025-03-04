import { Button, SimpleGrid, Text } from "@mantine/core";
import { IconMoodHappy, IconUmbrella } from "@tabler/icons-react";
import { SummaryLoseCard } from "../SummaryCard/SummaryLoseCard";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { resetGame } from "../../state/slices/gameSlice";
import { resetDeck } from "../../state/slices/deckSlice";
import { IconRefresh } from "@tabler/icons-react";

export const LoseSummary = () => {
  const dispatch = useAppDispatch();
  const happiness = useAppSelector((state) => state.game.happiness);
  const cash = useAppSelector((state) => state.game.cash);
    const onRestartClick = () => {
        dispatch(resetDeck());
        dispatch(resetGame());
      };

  return (
    <SimpleGrid cols={{ md: 1, sm: 1 }}>
      { cash < 0 ? 
      <SummaryLoseCard
        icon={<IconUmbrella size={32} stroke={1.5} />}
        summaryType="No cash"
        rating={0}
      >
        <Text mt="md">You lose because you run out of cash. While you are happy, you still need some cash to meet your daily needs.</Text>
        <Text mt="md">Have you heard of the 50/30/20 rule? </Text>
        <Text>The 50/30/20 Rule

          A simple way to budget your money:<br/>

          50% Needs – Essentials like rent, food, and bills.<br/>
          30% Wants – Fun stuff like dining out, entertainment, and shopping.<br/>
          20% Savings – Emergency fund, investments, and debt repayment.<br/>
          Stick to this rule to build pension while covering expenses!<br/>
        </Text>
      </SummaryLoseCard>
      :
      <SummaryLoseCard
        icon={<IconMoodHappy size={32} stroke={1.5} />}
        summaryType="Low happiness"
        rating={25}
      >
        <Text mt="md">You lose because your happiness rating drop below 25%. While basic needs are met you have little or no enjoyment or contentment.</Text>
      </SummaryLoseCard>}
      <Button size="lg" rightSection={<IconRefresh />} onClick={onRestartClick}>
        Restart game
      </Button>
    </SimpleGrid>
  );
};
