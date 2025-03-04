import { PensionPot } from "../../types/PensionPot";

export const pensionPotCalculator = (pensionPot: PensionPot, value: number, effect: string, category?: string) => {
  switch (effect) {
    case "pension":
      if (category === "choice") {
        return {
          currentValue: Number(pensionPot.currentValue + value),
          diff: pensionPot.diff,
          percentage: pensionPot.percentage,
          previousValue: pensionPot.previousValue,
        };
      }
      // This will only work if you can select a pension value once per round
      pensionPot.previousValue = pensionPot.currentValue;

      return {
        currentValue: Number(pensionPot.currentValue * value),
        diff: pensionPot.diff,
        percentage: pensionPot.percentage,
        previousValue: pensionPot.previousValue,
      };
    case "percentage-rate":
      return {
        currentValue: Number(pensionPot.currentValue),
        diff: pensionPot.diff,
        percentage: value,
        previousValue: pensionPot.previousValue
      };
      case "calculate":
      // This will only work if you can select a pension value once per round
      const potValue = pensionPot.currentValue * (1 + pensionPot.percentage / 100);

      const calculatedDiff = Number(
        (((potValue - pensionPot.previousValue) / pensionPot.previousValue) * 100)
      );

      return {
        currentValue: Number(potValue),
        diff: calculatedDiff,
        percentage: pensionPot.percentage,
        previousValue: pensionPot.currentValue,
      };
      default:
        return pensionPot;
    } 
};