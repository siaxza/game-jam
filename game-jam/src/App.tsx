import "@mantine/core/styles.css";
import { Container, MantineProvider, Stack } from "@mantine/core";
import { VariablesDisplay } from "./components/VariablesDisplay/VariablesDisplay";
import { CardSelect } from "./components/CardSelect/CardSelect";
import { useAppSelector } from "./state/hooks";
import { CompletionSummary } from "./components/CompletionSummary/CompletionSummary";
import { LoseSummary } from "./components/LoseSummary/LoseSummary";
import "./main.css";

function App() {
  const currentStage = useAppSelector((state) => state.game.currentStage);

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
            <CardSelect />
          </Stack>
        )}
      </Container>
    </MantineProvider>
  );
}

export default App;
