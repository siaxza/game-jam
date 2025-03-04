import reducer, { applyEffect } from "./gameSlice";
import { describe, it, expect, beforeEach } from "vitest";

describe("applyEffect reducer", () => {
  // eslint-disable-next-line
  let initialState: any;

  beforeEach(() => {
    initialState = {
      cash: 100,
      happiness: 50,
      pension: { value: 200, diff: 0 },
      salary: 1000,
      currentStage: "starter",
      round: 1,
    };
  });

  // Test for "Cost is taken away from cash"
  it("should deduct the cost from cash if cost is provided", () => {
    const payload: any = {
      cost: 50,
      effect: "cash",
      effectValue: 0,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.cash).toBe(50); // 100 - 50 = 50
  });

  // Test for happiness effect (positive value)
  it("should add happiness value if effect is happiness and value is positive", () => {
    const payload: any = {
      cost: 0,
      effect: "happiness",
      effectValue: 10,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.happiness).toBe(60); // 50 + 10 = 60
  });

  // Test for happiness effect (negative value)
  it("should deduct happiness value if effect is happiness and value is negative", () => {
    const payload: any = {
      cost: 0,
      effect: "happiness",
      effectValue: -10,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.happiness).toBe(40); // 50 - 10 = 40
  });

  // Test for pension effect (positive value)
  it("should add pension value if effect is pension and value is positive", () => {
    const payload: any = {
      cost: 0,
      effect: "pension",
      effectValue: 50,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.pension.value).toBe(250); // 200 + 50 = 250
  });

  // Test for pension effect (negative value)
  it("should deduct pension value if effect is pension and value is negative", () => {
    const payload: any = {
      cost: 0,
      effect: "pension",
      effectValue: -50,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.pension.value).toBe(150); // 200 - 50 = 150
  });

  // Test for cash effect (positive value)
  it("should add cash value if effect is cash and value is positive", () => {
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: 100,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.cash).toBe(200); // 100 + 100 = 200
  });

  // Test for cash effect (negative value)
  it("should deduct cash value if effect is cash and value is negative", () => {
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: -50,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.cash).toBe(50); // 100 - 50 = 50
  });

  // Test for salary effect (positive value)
  it("should add salary value if effect is salary and value is positive", () => {
    const payload: any = {
      cost: 0,
      effect: "salary",
      effectValue: 200,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.salary).toBe(1200); // 1000 + 200 = 1200
  });

  // Test for salary effect (negative value)
  it("should deduct salary value if effect is salary and value is negative", () => {
    const payload: any = {
      cost: 0,
      effect: "salary",
      effectValue: -200,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.salary).toBe(800); // 1000 - 200 = 800
  });

  // Test for "starter" stage change
  it('should change the current stage to "event" if the current stage is "starter"', () => {
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: 0,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.currentStage).toBe("event");
  });

  // Test for "choice" stage with round 10, current stage should change to "complete"
  it('should change the current stage to "complete" if the current stage is "choice" and round is 10', () => {
    initialState.currentStage = "choice";
    initialState.round = 10;
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: 0,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.currentStage).toBe("complete");
  });

  // Test for "choice" stage with round not 10, current stage should change to "payment"
  it('should change the current stage to "payment" if the current stage is "choice" and round is not 10', () => {
    initialState.currentStage = "choice";
    initialState.round = 1;
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: 0,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.currentStage).toBe("payment");
    expect(newState.round).toBe(2);
  });

  // Test for "payment" stage change
  it('should change the current stage to "event" if the current stage is "payment"', () => {
    initialState.currentStage = "payment";
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: 0,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.currentStage).toBe("event");
  });

  // Test for "event" stage change
  it('should change the current stage to "choice" if the current stage is "event"', () => {
    initialState.currentStage = "event";
    const payload: any = {
      cost: 0,
      effect: "cash",
      effectValue: 0,
    };

    const newState = reducer(initialState, applyEffect(payload));

    expect(newState.currentStage).toBe("choice");
  });
});
