import "@mantine/core/styles.css";
import { Container, MantineProvider, Stack, Stepper } from "@mantine/core";
import { VariablesDisplay } from "./components/VariablesDisplay/VariablesDisplay";
import { CardSelect } from "./components/CardSelect/CardSelect";
import { useAppSelector } from "./state/hooks";
import { CompletionSummary } from "./components/CompletionSummary/CompletionSummary";
import { LoseSummary } from "./components/LoseSummary/LoseSummary";
import "./main.css";

function App() {
  const currentStage = useAppSelector((state) => state.game.currentStage);

  const currentStageInt = (currentStage: string) => {
    switch (currentStage) {
      case "starter":
        return 0;
      case "event":
        return 1;
      case "choice":
        return 2;
      case "payment":
        return 3;
      case "complete":
        return 4;
      case "lose":
        return 5;
      default:
        return 1;
    }
  };

  return (
    <MantineProvider>
      <Container mt="sm">
        {currentStage === "lose" ? (
          <LoseSummary />
        ) : currentStage === "complete" ? (
          <CompletionSummary />
        ) : (
          <Stack>
            <VariablesDisplay />
            <Stepper
              active={currentStageInt(currentStage)}
              color="yellow"
              classNames={{
                steps: "custom-stepper",
              }}
            >
              <Stepper.Step label="Starter" description="Select starter card">
                <CardSelect />
              </Stepper.Step>
              <Stepper.Step
                label="Event"
                description="Event that occurs this round"
              >
                <CardSelect />
              </Stepper.Step>
              <Stepper.Step
                label="Choice"
                description="Make a choice this round"
              >
                <CardSelect />
              </Stepper.Step>
              <Stepper.Step label="Payment" description="Got your salary">
                <CardSelect />
              </Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>
          </Stack>
        )}
      </Container>
    </MantineProvider>
  );
}

export default App;
