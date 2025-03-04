import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../types/CardProps";
import { CurrentStage } from "../../types/CurrentStage";
import { PensionPot } from "../../types/PensionPot";
import { starterPensionPot } from "../../constants/starterPensionPot";
import { pensionPotCalculator } from "../../components/PensionPot/Calculator";

export interface GameState {
  currentStage: CurrentStage;
  happiness: number;
  pension: PensionPot;
  cash: number;
  round: number;
  salary: number;
}

const initialState: GameState = {
  currentStage: "starter",
  happiness: 50,
  pension: starterPensionPot,
  cash: 500,
  round: 1,
  salary: 500,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    applyEffect: (state, { payload }: PayloadAction<CardProps>) => {
      if (payload.cost) {
        state.cash -= payload.cost;
      }

      switch (payload.effect) {
        case "happiness":
          if (state.happiness + payload.effectValue > 100) {
            state.happiness = 100;
          } else if (state.happiness + payload.effectValue < 0) {
            state.happiness = 0;
          } else {
            state.happiness += payload.effectValue;
          }

          break;
        case "pension":
          state.pension = pensionPotCalculator(
            state.pension,
            payload.effectValue,
            payload.effect
          );
          break;
          case "pension-rate":
          state.pension = pensionPotCalculator(
            state.pension,
            payload.effectValue,
            payload.effect
          );
          break;
        case "salary":
          state.salary += payload.effectValue;
          break;
        case "cash":
        default:
          if (payload.category === "payment") {
            state.cash += state.salary;
          } else {
            state.cash += payload.effectValue;
          }
          break;
      }

      switch (state.currentStage) {
        case "starter":
          state.currentStage = "event";
          break;
        case "choice":
          if (state.round === 10) {
            state.currentStage = "complete";
          } else {
            state.round += 1;
            state.currentStage = "payment";
            state.pension = pensionPotCalculator(state.pension, 0, "calculate");
          }
          break;
        case "payment":
          state.currentStage = "event";
          break;
        case "event":
        default:
          state.currentStage = "choice";
          break;
      }

      if(state.cash <0 || state.happiness<25){
        state.currentStage = "lose";
      }
    },
    resetGame: () => {
      return initialState;
    },
  },
});

export const { applyEffect, resetGame } = gameSlice.actions;

export default gameSlice.reducer;