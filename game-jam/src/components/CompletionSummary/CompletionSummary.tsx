import { Button, SimpleGrid, Stack } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
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
      <Button
        size="lg"
        rightSection={<IconRefresh />}
        onClick={onRestartClick}
        color="yellow"
      >
        Restart game
      </Button>
    </Stack>
  );
};
