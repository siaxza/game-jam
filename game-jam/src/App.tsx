import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Card } from "./components/Card/Card";
import { VariablesDisplay } from "./components/VariablesDisplay/VariablesDisplay";
import { starterCards } from "./constants/starterCards";
import { choiceCards } from "./constants/choiceCards";
import { eventCards } from "./constants/eventCards";

function App() {
  return (
    <MantineProvider>
      <VariablesDisplay />
      <h2>Starter Cards</h2>
      {starterCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          category={card.category}
          effectValue={card.effectValue}
          effect={card.effect}
          cost={card.cost}
        />
      ))}

      <h2>Choice Cards</h2>
      {choiceCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          category={card.category}
          effectValue={card.effectValue}
          effect={card.effect}
          cost={card.cost}
        />
      ))}

    <h2>Event Cards</h2>
      {eventCards.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          category={card.category}
          effectValue={card.effectValue}
          effect={card.effect}
          cost={card.cost}
        />
      ))}
    </MantineProvider>
  );
}

export default App;
