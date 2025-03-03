import { Group, Paper, Text } from "@mantine/core";
import { IconPigMoney } from "@tabler/icons-react";

type ValueDisplayProps = {
  text: string;
  value: string;
};

export const ValueDisplay = ({ text, value }: ValueDisplayProps) => {
  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          {text}
        </Text>
        <IconPigMoney size={50} stroke={1.5} />
      </Group>

      <Group align="flex-end" gap="xs">
        <Text>{value}</Text>
      </Group>
    </Paper>
  );
};
