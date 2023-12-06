import React, { useRef } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Group,
  ScrollArea,
  Title,
  rem,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Stories from "../../components/stories/Stories";
// maxHeight: "calc(100vh - 200px)",

const Home = () => {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight,
      behavior: "smooth",
    });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight / 2,
      behavior: "smooth",
    });

  const scrollToTop = () =>
    viewport.current!.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <Grid m={10}>
      <Grid.Col span={{ xl: 8.5, lg: 8.5, md: 12, sm: 12, xs: 12 }}>
        <Grid.Col>
          <Stories />
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={3}>Posts</Title>
          <ScrollArea.Autosize
            mah={{
              xl: "70vh",
              lg: "70vh",
              md: "500px",
              sm: "500px",
              xs: "500px",
            }}
            style={{ border: "1px solid #1BAAF7" }}
            viewportRef={viewport}
          >
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
          </ScrollArea.Autosize>
          <Group justify="center">
            <Button onClick={scrollToBottom} variant="outline">
              Scroll to bottom
            </Button>
            <Button onClick={scrollToCenter} variant="outline">
              Scroll to center
            </Button>
            <Button onClick={scrollToTop} variant="outline">
              Scroll to top
            </Button>
          </Group>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={{ xl: 3.5, lg: 3.5, md: 12, sm: 12, xs: 12 }}>
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
          <ScrollArea
            h={{ xl: "35vh", lg: "35vh", md: 400, sm: 400, xs: 400 }}
            w="100%"
            style={{ border: "1px solid #1BAAF7" }}
          >
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
          <ScrollArea
            h={{ xl: "35vh", lg: "35vh", md: 400, sm: 400, xs: 400 }}
            w="100%"
            style={{ border: "1px solid #1BAAF7" }}
          >
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
