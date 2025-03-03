import {
  IconCircleArrowDown,
  IconCircleArrowUp,
  IconMoodSmile,
  IconPigMoney,
  IconUmbrella,
} from "@tabler/icons-react";
import { Effect } from "../../types/Effect";
import { useMantineTheme } from "@mantine/core";

type EffectDisplayProps = {
  effect: Effect;
  effectValue: number;
};

export const EffectDisplay = ({ effectValue, effect }: EffectDisplayProps) => {
  const theme = useMantineTheme();
  const isPositive = effectValue >= 0;
  const colour = isPositive ? theme.colors.green[6] : theme.colors.red[6];

  return (
    <span>
      {effect === "cash" ? (
        <IconPigMoney color={colour} />
      ) : effect === "happiness" ? (
        <IconMoodSmile color={colour} />
      ) : (
        <IconUmbrella color={colour} />
      )}
      {isPositive ? (
        <IconCircleArrowUp color={colour} />
      ) : (
        <IconCircleArrowDown color={colour} />
      )}
    </span>
  );
};
