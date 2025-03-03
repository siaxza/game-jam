import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../types/CardProps";
import { CurrentStage } from "../../types/CurrentStage";

export interface GameState {
  currentStage: CurrentStage;
  happiness: number;
  pensionValue: number;
  cash: number;
  round: number;
  salary: number;
}

const initialState: GameState = {
  currentStage: "starter",
  happiness: 50,
  pensionValue: 0,
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
          state.happiness += payload.effectValue;
          break;
        case "pension":
          state.pensionValue += payload.effectValue;
          break;
        case "salary":
          state.salary += payload.effectValue;
          break;
        case "cash":
        default:
          state.cash += payload.effectValue;
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
    },
  },
});

export const { applyEffect } = gameSlice.actions;

export default gameSlice.reducer;
