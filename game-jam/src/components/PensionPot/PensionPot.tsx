import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconUmbrella,
} from "@tabler/icons-react";
import { Flex, Text, ThemeIcon, Tooltip } from "@mantine/core";
import type { PensionPot } from "../../types/PensionPot";
import { ValueDisplay } from "../ValueDisplay/ValueDisplay";

export function PensionPot({ potData }: { potData: PensionPot }) {
  const DiffIcon = potData.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
  const startingPoint = potData.diff != 0 && potData.currentValue != 0;

  return (
    <ValueDisplay
      text="Pension"
      value={`£${potData.currentValue}`}
      icon={<IconUmbrella size={50} stroke={1.5} />}
    >
      {startingPoint && (
        <Flex align="center" gap="xs">
          <Text fz="sm" mt="md">
            <Text
              component="span"
              c={potData.diff > 0 ? "teal" : "red"}
              fw={700}
            >
              {potData.diff}%
            </Text>{" "}
            {potData.diff > 0 ? "increase" : "decrease"} compared to previous
            round
          </Text>
          <ThemeIcon
            color="gray"
            variant="light"
            style={{
              color:
                potData.diff > 0
                  ? "var(--mantine-color-teal-6)"
                  : "var(--mantine-color-red-6)",
            }}
            size={38}
            radius="md"
          >
            <DiffIcon size={28} stroke={1.5} />
          </ThemeIcon>
        </Flex>
      )}
    </ValueDisplay>
  );
}
