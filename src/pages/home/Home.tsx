import {
  Autocomplete,
  Box,
  Grid,
  Group,
  ScrollArea,
  Title,
  rem,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const Home = () => {
  return (
    <Grid m={10}>
      <Grid.Col span={8.5}>
        <Grid.Col span={12}>
          <Title order={3}>Stories</Title>

          <Box style={{ border: "1px solid #1BAAF7" }} h={100}>
            Status
          </Box>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={3}>Posts</Title>
          <ScrollArea h="70vh" style={{ border: "1px solid #1BAAF7" }}>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </ScrollArea>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={3.5}>
        <Group>
          <Box
            p={5}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Title w="100%" display="flex" order={3}>
              Your Friends
            </Title>
            <Autocomplete
              placeholder="Search Friend"
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              data={["John Doe", "Neil Azmuth", "Jackie Chan", "Wielder Smith"]}
              visibleFrom="xs"
            />
          </Box>
          <ScrollArea h={350} w="100%" style={{ border: "1px solid #1BAAF7" }}>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </ScrollArea>
        </Group>
        <Group mt={25}>
          <Box
            p={5}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Title w="100%" display="flex" order={3}>
              Friend Suggestions
            </Title>
            <Autocomplete
              placeholder="Search People"
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              data={["John Doe", "Neil Azmuth", "Jackie Chan", "Wielder Smith"]}
              visibleFrom="xs"
            />
          </Box>
          <ScrollArea h={350} w="100%" style={{ border: "1px solid #1BAAF7" }}>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </ScrollArea>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
