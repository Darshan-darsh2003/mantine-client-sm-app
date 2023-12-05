import {
  Container,
  Text,
  Button,
  Group,
  Title,
  AppShell,
  // ActionIcon,
  useMantineColorScheme,
  rem,
  Image,
  Grid,
  SegmentedControl,
  Center,
  Box,
} from "@mantine/core";
import classes from "./Introduction.module.css";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Hello from "../../utils/uiUtils/homePage/Hello";
import { useElementSize } from "@mantine/hooks";
import { FeaturesCards } from "./components/FeaturesCards";

function Introduction() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();
  const { ref, width, height } = useElementSize();

  return (
    <AppShell header={{ height: width < 550 ? 60 : 70 }}>
      <AppShell.Header
        px={40}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Group wrap="nowrap">
          <Image
            w={width < 550 ? 25 : 40}
            p={5}
            h={width < 550 ? 25 : 40}
            src="/static/images/Logo.png"
            style={{ border: "1px solid #1BAAF7" }}
          />
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "#1BAAF7", to: "cyan" }}
            fw={700}
            fz={width < 550 ? 25 : 40}
          >
            Interacto
          </Text>{" "}
        </Group>
        <Group>
          {/* <ActionIcon
            variant="default"
            onClick={() => toggleColorScheme()}
            size={30}
          >
            {colorScheme === "dark" ? (
              <IconSun size="1rem" />
            ) : (
              <IconMoonStars size="1rem" />
            )}
          </ActionIcon> */}
          <SegmentedControl
            value={colorScheme}
            onChange={(e: any) => setColorScheme(e)}
            data={[
              {
                value: "light",
                label: (
                  <Center>
                    <IconSun style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>Light</Box>
                  </Center>
                ),
              },
              {
                value: "dark",
                label: (
                  <Center>
                    <IconMoonStars
                      style={{ width: rem(16), height: rem(16) }}
                    />
                    <Box ml={10}>Dark</Box>
                  </Center>
                ),
              },
            ]}
          />
          {/* <ActionIcon variant="default" size="lg" aria-label="Settings">
            <IconSettings style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </AppShell.Header>
      <AppShell.Main >
        <Grid className={classes.wrapper}>
          <Grid.Col span={{ xl: 7, lg: 7, md: 12, sm: 12, xs: 12 }}>
            <Container
              pt={{
                base: "xs",
                xs: "xl",
                sm: "lg",
                md: "sm",
                lg: "md",
                xl: "md",
              }}
              size={900}
              className={classes.inner}
              ml={width < 550 ? 40 : "auto"}
            >
              <Title
                ref={ref}
                fz={width < 550 ? width / 8 : 90}
                style={{
                  lineHeight: "1.1",
                }}
                className={classes.title}
              >
                An{" "}
                <Text
                  ref={ref}
                  fz={width < 550 ? width / 7 : 100}
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "pink", to: "yellow" }}
                >
                  Interactive
                </Text>{" "}
                Social Media Platform for Everyone
              </Title>
              <Text className={classes.description} mt={30}>
                Interacto is a social media platform for developers to interact
                with each other. It is a platform where developers can share
                their knowledge, ideas, and projects with other developers.
              </Text>
              <Group className={classes.controls}>
                <Button
                  radius="md"
                  size={width < 550 ? "lg" : "xl"}
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
                  size={width < 550 ? "lg" : "xl"}
                  radius="md"
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
          <Grid.Col span={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }}>
            <Center mt={80}>
              <Hello height={height + 40} width={width + 40} ref={ref} />
            </Center>
          </Grid.Col>
          <Grid.Col mt={80}>
            <FeaturesCards />
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}

export default Introduction;
