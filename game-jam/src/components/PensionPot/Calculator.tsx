import { PensionPot } from "../../types/PensionPot";

export const PensionPotCalculator = (pensionPot: PensionPot, value: number) => {
  // Calculate the pension pot value based on the value passed and work out the diff from the previous value as a percentage of the overall value
  const potValue = pensionPot.value + value;

  return {
    value: potValue,
    diff: Number(
      (((potValue - pensionPot.value) / pensionPot.value) * 100).toFixed(2)
    ),
  };
};
