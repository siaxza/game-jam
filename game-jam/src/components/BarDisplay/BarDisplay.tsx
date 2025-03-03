import { Group, Paper, Progress, Text } from "@mantine/core";

type CashDisplayProps = {
  text: string;
  value: number;
  icon: React.ReactNode;
};

export const BarDisplay = ({ text, value, icon }: CashDisplayProps) => {
  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          {text}
        </Text>
        {icon}
      </Group>

      <Progress.Root mt="md" size="xlg" radius="xl">
        <Progress.Section value={value}>
          <Progress.Label>{value}%</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Paper>
  );
};
