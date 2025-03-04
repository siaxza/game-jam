import { IconUmbrella } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { SummaryCard } from "../SummaryCard/SummaryCard";

type PensionSummaryCardProps = {
  rating: number;
};

export const PensionSummaryCard = ({
  rating
}: PensionSummaryCardProps) => {
  const summaryText =
    rating >= 80 ? "A lifestyle that allows you to be more spontaneous with your money. You could have a subscription to a streaming service, regular beauty treatments, a foreign holiday and several UK mini-breaks a year." : 
    rating >= 60 ? "A lifestyle with more financial security and more flexibility. You could have one foreign holiday a year and eat out a few times a month. You’d have the opportunity to do more of the things you want to do." : 
    "A ‘minimum’ lifestyle covers all your needs, with some left over for fun and social occasions. You could holiday in the UK, eat out about once a month and do some affordable leisure activities about twice a week.";
  
  return (
    <SummaryCard
      icon={<IconUmbrella size={32} stroke={1.5} />}
      summaryType="Pension"
      rating={rating}
      >
      <Text mt="md">{summaryText}</Text>
    </SummaryCard>
  )
}