import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Group, Paper, Text, ThemeIcon } from '@mantine/core';
import classes from './PensionPot.module.css';

interface PotData {
  title: string;
  value: string;
  diff: number;
}

export function PensionPot({ potData }: { potData: PotData }) {
  const DiffIcon = potData.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

  return (
    <Paper withBorder p="md" radius="md" key={potData.title}>
      <Group justify="apart">
        <div>
          <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
            {potData.title}
          </Text>
          <Text fw={700} fz="xl">
            {potData.value}
          </Text>
        </div>
        <ThemeIcon
          color="gray"
          variant="light"
          style={{
            color: potData.diff > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
          }}
          size={38}
          radius="md"
        >
          <DiffIcon size={28} stroke={1.5} />
        </ThemeIcon>
      </Group>
      <Text c="dimmed" fz="sm" mt="md">
        <Text component="span" c={potData.diff > 0 ? 'teal' : 'red'} fw={700}>
          {potData.diff}%
        </Text>{' '}
        {potData.diff > 0 ? 'increase' : 'decrease'} compared to previous round
      </Text>
    </Paper>
  );
}