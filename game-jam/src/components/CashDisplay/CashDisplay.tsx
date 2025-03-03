import { Group, Paper, Text } from "@mantine/core";
import { IconCoinPound } from "@tabler/icons-react";

type CashDisplayProps = {
  text: string;
  value: number;
};

export const CashDisplay = ({ text, value }: CashDisplayProps) => {
  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          {text}
        </Text>
        <IconCoinPound size={22} stroke={1.5} />
      </Group>

      <Group align="flex-end" gap="xs" mt={25}>
        <Text>£{value}</Text>
      </Group>

      <Text fz="xs" c="dimmed" mt={7}>
        Compared to previous month
      </Text>
    </Paper>
  );
};
