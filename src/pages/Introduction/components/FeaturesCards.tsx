import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconCookie, IconUserPlus, IconSpyOff } from "@tabler/icons-react";
import classes from "./FeaturesCards.module.css";

const cardsData = [
  {
    title: "Connect with people",
    description:
      "Easy to use, easy to connect with people around the world, and easy to make friends",
    icon: IconUserPlus,
  },
  {
    title: "Privacy focused",
    description:
      "We don’t sell your data, we don’t show ads, we don’t track you. Period",
    icon: IconSpyOff,
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = cardsData.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best Social Media Platform
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Connect easily with people around the world
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
