import {
  Badge,
  Paper,
  RingProgress,
  Text,
  ThemeIcon,
  Center,
  Title,
} from "@mantine/core";
import {
  IconPentagonNumber1,
  IconPentagonNumber2,
  IconPentagonNumber3,
  IconUmbrella,
} from "@tabler/icons-react";
import classes from "./SummaryCard.module.css";

type SummaryCardProps = {
  icon: React.ReactNode;
  summaryType: "Pension" | "Happiness";
  rating: number;
  children?: React.ReactNode;
};

export const SummaryCard = ({
  icon,
  summaryType,
  rating,
  children,
}: SummaryCardProps) => {
  const colour = rating >= 80 ? "green" : rating >= 60 ? "yellow" : "red";
  const Icon =
    rating >= 80
      ? IconPentagonNumber1
      : rating >= 60
      ? IconPentagonNumber2
      : IconPentagonNumber3;
  const badgeText =
    rating >= 80 ? "Comfortable" : rating >= 60 ? "Moderate" : "Minimum";

  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60} color={colour}>
        {icon}
      </ThemeIcon>

      <Title ta="center" order={2}>
        {summaryType} Summary
      </Title>

      <Center>
        <RingProgress
          label={
            <Center>
              <Icon size={50} stroke={2} color={colour} />
            </Center>
          }
          sections={[{ value: rating, color: colour }]}
        />
      </Center>
      <Center>
        <Badge color={colour} size="sm">
          {badgeText}
        </Badge>
      </Center>

      {children}
    </Paper>
  );
};
