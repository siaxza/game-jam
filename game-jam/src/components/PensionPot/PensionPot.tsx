import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Group, Paper, Text, ThemeIcon } from '@mantine/core';
import classes from './PensionPot.module.css';
import type { PensionPot } from '../../types/PensionPot';

export function PensionPot({ potData }: { potData: PensionPot }) {
  const DiffIcon = potData.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
  const startingPoint = potData.diff != 0 && potData.value != 0;

  return (
    <Paper withBorder p="md" radius="md" key="Pension Pot">
      <Group justify="apart">
        <div>
          <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
            Pension Pot
          </Text>
          <Text fw={700} fz="xl">
            £{potData.value}
          </Text>
        </div>
        {startingPoint && <ThemeIcon
          color="gray"
          variant="light"
          style={{
            color: potData.diff > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
          }}
          size={38}
          radius="md"
        >
          <DiffIcon size={28} stroke={1.5} />
        </ThemeIcon>}
      </Group>
      {startingPoint && <Text c="dimmed" fz="sm" mt="md">
        <Text component="span" c={potData.diff > 0 ? 'teal' : 'red'} fw={700}>
          {potData.diff}%
        </Text>{' '}
        {potData.diff > 0 ? 'increase' : 'decrease'} compared to previous round
      </Text>}
    </Paper>
  );
}