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
      // if theres cost, reduce the cash
      if (payload.cost) {
        state.cash -= payload.cost;
      }

      // if it's a happiness effect apply it
      if (payload.effect === "happiness") {
        state.happiness += payload.effectValue;
      }

      // if its a pension value effect apply it
      if (payload.effect === "pension") {
        state.pensionValue += payload.effectValue;
      }

      if (state.currentStage === "starter") {
        state.currentStage = "event";
      } else if (state.currentStage === "choice") {
        if (state.round === 10) {
          state.currentStage = "complete";
        } else {
          state.currentStage = "payment";
        }
      } else if (state.currentStage === "payment") {
        state.currentStage = "event";
      } else if (state.currentStage === "event") {
        state.currentStage = "choice";
      }
    },
  },
});

export const { applyEffect } = gameSlice.actions;

export default gameSlice.reducer;
