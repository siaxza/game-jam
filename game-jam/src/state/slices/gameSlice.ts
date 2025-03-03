import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../types/CardProps";

export interface GameState {
  happiness: number;
  pensionValue: number;
  cash: number;
  round: number;
}

const initialState: GameState = {
  happiness: 50,
  pensionValue: 0,
  cash: 0,
  round: 1,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    applyEffect: (state, { payload }: PayloadAction<CardProps>) => {
      console.log(state);
      // if theres cost, redfuce the cash
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
    },
  },
});

export const { applyEffect } = gameSlice.actions;

export default gameSlice.reducer;
