import { pensionCards } from "../../constants/pensionCards";
import { happinessCards } from "../../constants/happinessCards";
import { Card } from "../Card/Card";
import { Group, UnstyledButton } from "@mantine/core";

export const CardSelect = () => {
  return (
    <Group style={{ alignItems: "stretch" }}>
      {pensionCards.map((card) => (
        <UnstyledButton>
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            category={card.category}
            effect={card.effect}
            cost={card.cost}
          />
        </UnstyledButton>
      ))}
      {happinessCards.map((card) => (
        <UnstyledButton>
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            category={card.category}
            effect={card.effect}
            cost={card.cost}
          />
        </UnstyledButton>
      ))}
    </Group>
  );
};
