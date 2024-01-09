import { Grid, Paper, ScrollArea, Title } from "@mantine/core";
import React from "react";
import { UserCard } from "./components/UserCard";
import { TextInput, ActionIcon, useMantineTheme, rem } from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

const SearchPage = () => {
  const theme = useMantineTheme();
  return (
    <Grid p={10}>
      <Grid.Col>
        <Paper withBorder p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Title order={2}>Search Users</Title>
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                radius="md"
                size="md"
                placeholder="Search Users"
                rightSectionWidth={42}
                leftSection={
                  <IconSearch
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                }
                rightSection={
                  <ActionIcon
                    size={32}
                    radius="xl"
                    color={theme.primaryColor}
                    variant="filled"
                  >
                    <IconArrowRight
                      style={{ width: rem(18), height: rem(18) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                }
              />
            </Grid.Col>
          </Grid>
        </Paper>
      </Grid.Col>
      <Grid.Col>
        <Paper p={10} withBorder>
          <Title order={3} pl={30}>
            Friend Suggestions
          </Title>
          <ScrollArea.Autosize mah="calc(100vh - 200px)">
            <Grid>
              {Array(10)
                .fill(null)
                .map((element, index) => (
                  <Grid.Col p={30} span={{ lg: 4, xl: 3, md: 6 }}>
                    <UserCard />
                  </Grid.Col>
                ))}
            </Grid>
          </ScrollArea.Autosize>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default SearchPage;
