import { SimpleGrid } from "@mantine/core";
import { BarDisplay } from "../BarDisplay/BarDisplay";
import { ValueDisplay } from "../ValueDisplay/ValueDisplay";
import { IconFlag, IconMoodSmile, IconPigMoney } from "@tabler/icons-react";
import { useAppSelector } from "../../state/hooks";
import { PensionPot } from "../PensionPot/PensionPot";
import { motion } from "motion/react";

export const VariablesDisplay = () => {
  const gameState = useAppSelector((state) => state.game);

  return (
    <SimpleGrid cols={{ md: 4, base: 2 }}>
      <motion.div
        key={gameState.cash}
        initial={{ scale: 1 }}
        animate={{ scale: [0.5, 1] }}
      >
        <ValueDisplay
          text="Cash"
          value={`£${gameState.cash}`}
          icon={<IconPigMoney size={50} stroke={1.5} />}
        />
      </motion.div>
      <motion.div
        key={gameState.happiness}
        initial={{ scale: 1 }}
        animate={{ scale: [0.5, 1] }}
      >
        <BarDisplay
          text="Happiness"
          value={gameState.happiness}
          icon={<IconMoodSmile size={50} />}
        />
      </motion.div>

      <motion.div
        key={gameState.pension.currentValue}
        initial={{ scale: 1 }}
        animate={{ scale: [0, 1] }}
      >
        <PensionPot potData={gameState.pension} />
      </motion.div>

      <motion.div
        key={gameState.round}
        initial={{ scale: 1 }}
        animate={{ scale: [0.5, 1] }}
      >
        <ValueDisplay
          text="Round"
          value={`${gameState.round}/10`}
          icon={<IconFlag size={50} />}
        />
      </motion.div>
    </SimpleGrid>
  );
};
