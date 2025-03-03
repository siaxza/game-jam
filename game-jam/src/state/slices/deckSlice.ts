import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../types/CardProps";
import { starterCards } from "../../constants/starterCards";
import { choiceCards } from "../../constants/choiceCards";
import { eventCards } from "../../constants/eventCards";
import { CurrentStage } from "../../types/CurrentStage";
import { paymentCards } from "../../constants/paymentCards";

export interface DeckState {
  choiceCardDeck: CardProps[];
  eventCardDeck: CardProps[];
  cardsInHand: CardProps[];
}

const initialState: DeckState = {
  choiceCardDeck: choiceCards,
  eventCardDeck: eventCards,
  cardsInHand: starterCards,
};

export const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    drawNextCards: (state, { payload }: PayloadAction<CurrentStage>) => {
      // Todo: handle the next move depending on current stage
      if (payload === "event") {
        // Todo: remove three random cards from the choice card deck
        // Todo: add the three cards to the card in hand

        // Remove three random cards from the choice card deck
        const drawnCards = [];

        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(
            Math.random() * state.choiceCardDeck.length
          );
          const drawnCard = state.choiceCardDeck.splice(randomIndex, 1)[0];
          drawnCards.push(drawnCard);
        }

        // Add the three cards to the player's hand
        state.cardsInHand = drawnCards;
      } else if (payload === "choice") {
        state.cardsInHand = paymentCards;
      }
      // Todo: need to handle end game condition here too
      else {
        // Choose a random event card
        const randomIndex = Math.floor(
          Math.random() * state.eventCardDeck.length
        );
        const drawnCard = state.eventCardDeck.splice(randomIndex, 1)[0];
        state.cardsInHand = [drawnCard];
      }
    },
  },
});

export const { drawNextCards } = deckSlice.actions;

export default deckSlice.reducer;
