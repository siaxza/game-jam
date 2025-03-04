import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../types/CardProps";
import { CurrentStage } from "../../types/CurrentStage";
import { PensionPot } from "../../types/PensionPot";
import { starterPensionPot } from "../../constants/starterPensionPot";
import { pensionPotCalculator } from "../../components/PensionPot/Calculator";
import baDingSfx from '../../baDing.mp3';
import yaySfx from '../../bubble.mp3';
import pensionSfx from '../../vault.mp3';
import clockSfx from '../../clock.mp3';

export interface GameState {
  currentStage: CurrentStage;
  happiness: number;
  pension: PensionPot;
  cash: number;
  round: number;
  salary: number;
  wonLotto?: boolean
}

const initialState: GameState = {
  currentStage: "starter",
  happiness: 50,
  pension: starterPensionPot,
  cash: 500,
  round: 1,
  salary: 500,
};


function playSound (sound: string | undefined) {
  const audio = new Audio(sound)
  audio.preservesPitch = false;
  audio.playbackRate = Math.random() * (1.5 - 1 + 0.1) + 1;
  audio.play()
}

function playLowSound (sound: string | undefined) {
  const audio = new Audio(sound)
  audio.preservesPitch = false;
  audio.playbackRate = Math.random() * (0.9 - 0.7 + 0.1) + 0.7;
  audio.play()
}


export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    applyEffect: (state, { payload }: PayloadAction<CardProps>) => {
      if (payload.cost) {
        playLowSound(baDingSfx)
        state.cash -= payload.cost;
      }

      switch (payload.effect) {
        case "happiness":
          if (state.happiness + payload.effectValue > 100) {
            state.happiness = 100;
          } else if (state.happiness + payload.effectValue < 0) {
            state.happiness = 0;
          } else {
            playSound(yaySfx)
          state.happiness += payload.effectValue;
          }

          break;
        case "pension":
          playSound(pensionSfx)
          state.pension = pensionPotCalculator(
            state.pension,
            payload.effectValue,
            payload.effect,
            payload.category
          );
          break;
        case "pension-rate":
          state.pension = pensionPotCalculator(
            state.pension,
            payload.effectValue,
            payload.effect,
            payload.category
          );
          break;
        case "salary":
          playSound(baDingSfx)
          state.salary += payload.effectValue;
          break;
        case "cash":
        default:
          playSound(baDingSfx)
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
          if (state.round === 5) {
            state.currentStage = "complete";
          } else {
            playSound(clockSfx);
            state.round += 1;
            state.currentStage = "payment";
            if (Math.random() < 1 / 1000) {
              state.wonLotto = true;
            }
            state.pension = pensionPotCalculator(state.pension, 0, "calculate");
            if (payload.effect !== "happiness") {
              state.happiness -= 20;
            }
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

      if (state.cash < 0 || state.happiness < 25) {
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
