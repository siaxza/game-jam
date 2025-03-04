import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Center, Group, Paper, RingProgress, SimpleGrid, Text } from '@mantine/core';

type ValueDisplayProps = {
  text: string;
  value: string;
  icon: React.ReactNode;
};

export const RoundDisplay = ({ text, value, icon }: ValueDisplayProps) => {
  return (
    <Paper withBorder radius="md" p="xs" >
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          // don't know how it works, it's default set to be 100 in total
          sections={[{ value: 10, color: "blue" }]}
        />

        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {text}
          </Text>
          <Text fw={700} size="xl">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  );
};