import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Card } from "./components/Card/Card";
import { pensionCards } from "./constants/pensionCards";
import { happinessCards } from "./constants/happinessCards";

function App() {
  return (
    <MantineProvider>
      <h2>Pension Cards</h2>
      {pensionCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          category={card.category}
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
          cost={card.cost}
        />
      ))}
    </MantineProvider>
  );
}

export default App;
