import { SimpleGrid } from "@mantine/core";
import { BarDisplay } from "../BarDisplay/BarDisplay";
import { CashDisplay } from "../CashDisplay/CashDisplay";
import { IconMoodSmile, IconUmbrella } from "@tabler/icons-react";

export const VariablesDisplay = () => {
  return (
    <SimpleGrid cols={3}>
      <CashDisplay text="Cash" value={2000} />
      <BarDisplay
        text="Happiness"
        value={50}
        icon={<IconMoodSmile size={50} />}
      />
      <BarDisplay
        text="Pension pot"
        value={50}
        icon={<IconUmbrella size={50} />}
      />
    </SimpleGrid>
  );
};
