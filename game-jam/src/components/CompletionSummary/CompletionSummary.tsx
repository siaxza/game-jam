import { Button, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconMoodHappy, IconRefresh, IconUmbrella } from "@tabler/icons-react";
import { SummaryCard } from "../SummaryCard/SummaryCard";
import { useAppDispatch } from "../../state/hooks";
import { resetGame } from "../../state/slices/gameSlice";
import { resetDeck } from "../../state/slices/deckSlice";
import { PensionSummaryCard } from "../PensionSummaryCard/PensionSummaryCard";
import { HappinessnSummaryCard } from "../HappinessSummaryCard/HappinessSummaryCard";

export const CompletionSummary = () => {
  const dispatch = useAppDispatch();

  const onRestartClick = () => {
    dispatch(resetDeck());
    dispatch(resetGame());
  };

  return (
    <Stack>
      <SimpleGrid cols={{ md: 2, sm: 1 }}>
        <PensionSummaryCard rating={80} />
        <HappinessnSummaryCard rating={50} />
      </SimpleGrid>
      <Button size="lg" rightSection={<IconRefresh />} onClick={onRestartClick}>
        Restart game
      </Button>
    </Stack>
  );
};
