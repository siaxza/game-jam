import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
import { CardProps } from "../../types/CardProps";

export interface DeckState {
  cards: CardProps[];
}

const initialState: DeckState = {
  cards: [],
};

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    removeCardFromDeck: (state) => {
      console.log(state);
    },
  },
});

export const { removeCardFromDeck } = deckSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default deckSlice.reducer;
