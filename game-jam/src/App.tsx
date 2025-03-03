import "@mantine/core/styles.css";
import { Container, MantineProvider, Stack } from "@mantine/core";
import { VariablesDisplay } from "./components/VariablesDisplay/VariablesDisplay";
import { CardSelect } from "./components/CardSelect/CardSelect";

function App() {
  return (
    <MantineProvider>
      <Container mt="sm">
        <Stack>
          <VariablesDisplay />
          <CardSelect />
        </Stack>
      </Container>
    </MantineProvider>
  );
}

export default App;
