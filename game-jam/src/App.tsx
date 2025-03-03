import "@mantine/core/styles.css";
import { Container, MantineProvider, Stack } from "@mantine/core";
import { VariablesDisplay } from "./components/VariablesDisplay/VariablesDisplay";
import { CardSelect } from "./components/CardSelect/CardSelect";
import { Card } from "./components/Card/Card";
import { pensionCards } from "./constants/pensionCards";
import { happinessCards } from "./constants/happinessCards";

function App() {
  return (
    <MantineProvider>
      <Container mt="sm">
        <Stack>
          <VariablesDisplay />
          <CardSelect />
        </Stack>
      </Container>
      <h2>Pension Cards</h2>
      {pensionCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          category={card.category}
          effect={card.effect}
          cost={card.cost}
        />
      ))}

      <h2>Hapiness Cards</h2>
      {happinessCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          category={card.category}
          effect={card.effect}
          cost={card.cost}
        />
      ))}
    </MantineProvider>
  );
}

export default App;
