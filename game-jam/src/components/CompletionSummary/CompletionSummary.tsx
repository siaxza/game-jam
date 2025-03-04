import { Button, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconMoodHappy, IconRefresh, IconUmbrella } from "@tabler/icons-react";
import { SummaryCard } from "../SummaryCard/SummaryCard";
import { useAppDispatch } from "../../state/hooks";
import { resetGame } from "../../state/slices/gameSlice";
import { resetDeck } from "../../state/slices/deckSlice";

export const CompletionSummary = () => {
  const dispatch = useAppDispatch();

  const onRestartClick = () => {
    dispatch(resetDeck());
    dispatch(resetGame());
  };

  return (
    <Stack>
      <SimpleGrid cols={{ md: 2, sm: 1 }}>
        <SummaryCard
          icon={<IconUmbrella size={32} stroke={1.5} />}
          summaryType="Pension"
          rating={80}
        >
          <Text mt="md">blablabla text about pension rating</Text>
        </SummaryCard>
        <SummaryCard
          icon={<IconMoodHappy size={32} stroke={1.5} />}
          summaryType="Happiness"
          rating={50}
        >
          <Text mt="md">blablabla text about happiness rating</Text>
        </SummaryCard>
      </SimpleGrid>
      <Button size="lg" rightSection={<IconRefresh />} onClick={onRestartClick}>
        Restart game
      </Button>
    </Stack>
  );
};
