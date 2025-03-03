import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
  happiness: number;
  pensionValue: number;
  cash: number;
  round: number;
}

const initialState: GameState = {
  happiness: 50,
  pensionValue: 50,
  cash: 0,
  round: 1,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    applyEffect: (state) => {
      console.log(state);
    },
  },
});

export const { applyEffect } = gameSlice.actions;

export default gameSlice.reducer;
