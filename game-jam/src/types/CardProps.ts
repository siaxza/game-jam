export type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  effect: "pension" | "happiness" | "cash";
  category: "starter" | "choice" | "event";
  cost: number;
};
