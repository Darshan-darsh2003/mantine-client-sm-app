import {
  Container,
  Text,
  Button,
  Group,
  Title,
  AppShell,
  ActionIcon,
  useMantineColorScheme,
  rem,
  Image,
  Grid,
} from "@mantine/core";
// import { GithubIcon } from "@mantinex/dev-icons";
import classes from "./HomePage.module.css";
import { IconMoonStars, IconSettings, IconSun } from "@tabler/icons-react";
import image from "./Logo.png";
import { useNavigate } from "react-router-dom";
import Hello from "../../utils/uiUtils/page404/homePage/Hello";

function HomePage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

  return (
    <AppShell>
      <AppShell.Header
        px={40}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Group>
          <Image w={20} h={35} src={image} />
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "#1BAAF7", to: "cyan" }}
            fw={700}
            fz={40}
          >
            Interacto
          </Text>{" "}
        </Group>
        <Group>
          <ActionIcon
            variant="default"
            onClick={() => toggleColorScheme()}
            size={30}
          >
            {colorScheme === "dark" ? (
              <IconSun size="1rem" />
            ) : (
              <IconMoonStars size="1rem" />
            )}
          </ActionIcon>
          <ActionIcon variant="default" size="lg" aria-label="Settings">
            <IconSettings style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Grid className={classes.wrapper}>
          <Grid.Col span={6}>
            <Container size={900} className={classes.inner} ml={50}>
              <Title fz={80} className={classes.title}>
                An{" "}
                <Text
                  fz={100}
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "pink", to: "yellow" }}
                >
                  Interactive
                </Text>{" "}
                Social Media Platform for Developers
              </Title>
              <Text className={classes.description} mt={30}>
                Interacto is a social media platform for developers to interact
                with each other. It is a platform where developers can share
                their knowledge, ideas, and projects with other developers.
              </Text>
              <Group className={classes.controls}>
                <Button
                  size="xl"
                  className={classes.control}
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  REGISTER
                </Button>

                <Button
                  component="a"
                  size="xl"
                  variant="default"
                  className={classes.control}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  LOGIN
                </Button>
              </Group>
            </Container>
          </Grid.Col>
          <Grid.Col span={6}>
            <Hello />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}

export default HomePage;
