import { Group, Paper, Text } from "@mantine/core";

type ValueDisplayProps = {
  text: string;
  value: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

export const ValueDisplay = ({
  text,
  value,
  icon,
  children,
}: ValueDisplayProps) => {
  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Text>{text}</Text>
        {icon}
      </Group>

      <Group align="flex-end" gap="xs">
        <Text>{value}</Text>
      </Group>

      {children}
    </Paper>
  );
};
