import { IconUmbrella, IconMoodHappy } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { SummaryCard } from "../SummaryCard/SummaryCard";

type HappinessnSummaryCardProps = {
  rating: number;
};

export const HappinessnSummaryCard = ({
  rating
}: HappinessnSummaryCardProps) => {
  const summaryText =
    rating >= 80 ? "You are flourishing and experiencing genuine joy, contentment, and a sense of purpose." : 
    rating >= 60 ? "You have sense of general satisfaction with life, but without intense joy or excitement." : 
    "While basic needs are met you have little or no enjoyment or contentment.";
  
  return (
    <SummaryCard
      icon={<IconMoodHappy size={32} stroke={1.5} />}
      summaryType="Happiness"
      rating={rating}
      >
      <Text mt="md">{summaryText}</Text>
    </SummaryCard>
  )
}