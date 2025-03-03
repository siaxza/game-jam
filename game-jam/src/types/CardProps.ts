import { Effect } from "./Effect";

export type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  effect: Effect;
  category: "starter" | "choice" | "event" | "payment";
  effectValue: number;
  cost?: number;
};
