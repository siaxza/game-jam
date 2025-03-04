import { SimpleGrid, Stack, Text } from "@mantine/core";
import { IconMoodHappy, IconUmbrella } from "@tabler/icons-react";
import { SummaryCard } from "../SummaryCard/SummaryCard";

export const CompletionSummary = () => {
  return (
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
  );
};
