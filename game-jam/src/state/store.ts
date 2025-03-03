import { configureStore } from "@reduxjs/toolkit";
import deckReducer from "./slices/deckSlice";
import gameReducer from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    deck: deckReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
