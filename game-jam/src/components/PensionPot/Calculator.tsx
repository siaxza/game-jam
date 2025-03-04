import { PensionPot } from "../../types/PensionPot";

export const pensionPotCalculator = (pensionPot: PensionPot, value: number, effect: string ) => {
  switch (effect) {
    case "pension":
      // This will only work if you can select a pension value once per round
      pensionPot.previousValue = pensionPot.currentValue;

      return {
        currentValue: pensionPot.currentValue + value,
        diff: pensionPot.diff,
        percentage: pensionPot.percentage,
        previousValue: pensionPot.previousValue,
      };
    case "percentage-rate":
      return {
        currentValue: pensionPot.currentValue,
        diff: pensionPot.diff,
        percentage: value,
        previousValue: pensionPot.previousValue
      };
      case "calculate":
      // This will only work if you can select a pension value once per round
      const potValue = pensionPot.currentValue * (1 + pensionPot.percentage / 100);

      return {
        currentValue: potValue.toFixed(2),
        diff: Number(
          (((potValue - pensionPot.currentValue) / pensionPot.previousValue) * 100).toFixed(2)
        ),
        percentage: pensionPot.percentage,
        previousValue: pensionPot.currentValue,
      };
      default:
        return pensionPot;
    } 
};