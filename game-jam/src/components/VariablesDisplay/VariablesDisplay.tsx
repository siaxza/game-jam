import { SimpleGrid } from "@mantine/core";
import { BarDisplay } from "../BarDisplay/BarDisplay";
import { ValueDisplay } from "../ValueDisplay/ValueDisplay";
import {
  IconFlag,
  IconMoodSmile,
  IconPigMoney,
  IconUmbrella,
} from "@tabler/icons-react";
import { useAppSelector } from "../../state/hooks";
import { PensionPot } from "../PensionPot/PensionPot";

export const VariablesDisplay = () => {
  const gameState = useAppSelector((state) => state.game);

  const potData = { title: 'Pension Pot', value: '£13,456', diff: 34 };

  return (
    <SimpleGrid cols={4}>
      <ValueDisplay
        text="Cash"
        value={`${gameState.cash}`}
        icon={<IconPigMoney size={50} stroke={1.5} />}
      />
      <BarDisplay
        text="Happiness"
        value={gameState.happiness}
        icon={<IconMoodSmile size={50} />}
      />
      <PensionPot potData={potData}/>
      <ValueDisplay
        text="Round"
        value={`${gameState.round}/10`}
        icon={<IconFlag size={50} />}
      />
    </SimpleGrid>
  );
};
