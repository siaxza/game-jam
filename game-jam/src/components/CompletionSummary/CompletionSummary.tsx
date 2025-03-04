import { SimpleGrid, Stack, Text } from "@mantine/core";
import { PensionSummaryCard } from "../PensionSummaryCard/PensionSummaryCard";
import { HappinessnSummaryCard } from "../HappinessSummaryCard/HappinessSummaryCard";

export const CompletionSummary = () => {
  return (
    <SimpleGrid cols={{ md: 2, sm: 1 }}>
      <PensionSummaryCard
        rating={80}
      />
      <HappinessnSummaryCard
        rating={50}
      />
    </SimpleGrid>
  );
};
