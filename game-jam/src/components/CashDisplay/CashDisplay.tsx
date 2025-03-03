import { Group, Paper, Text } from "@mantine/core";
import { IconPigMoney } from "@tabler/icons-react";

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
        <IconPigMoney size={50} stroke={1.5} />
      </Group>

      <Group align="flex-end" gap="xs">
        <Text>£{value}</Text>
      </Group>
    </Paper>
  );
};
