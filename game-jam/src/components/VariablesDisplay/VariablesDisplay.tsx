import { Paper, SimpleGrid } from "@mantine/core";
import { BarDisplay } from "../BarDisplay/BarDisplay";
import { CashDisplay } from "../CashDisplay/CashDisplay";
import { IconMoodSmile, IconUmbrella } from "@tabler/icons-react";
import { useAppSelector } from "../../state/hooks";

export const VariablesDisplay = () => {
  const gameState = useAppSelector((state) => state.game);

  return (
    <SimpleGrid cols={4}>
      <CashDisplay text="Cash" value={gameState.cash} />
      <BarDisplay
        text="Happiness"
        value={gameState.happiness}
        icon={<IconMoodSmile size={50} />}
      />
      <BarDisplay
        text="Pension pot"
        value={gameState.pensionValue}
        icon={<IconUmbrella size={50} />}
      />
      <SimpleGrid cols={2}>
        <Paper withBorder>Round {gameState.round}/10</Paper>
        <Paper withBorder>Year X</Paper>
      </SimpleGrid>
    </SimpleGrid>
  );
};
