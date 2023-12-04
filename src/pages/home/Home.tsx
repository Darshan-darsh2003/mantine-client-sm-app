import React from "react";
import {
  Autocomplete,
  Box,
  Grid,
  Group,
  Image,
  ScrollArea,
  Title,
  rem,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import classes from "./Home.module.css";

const data = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
];

// maxHeight: "calc(100vh - 200px)",

const Home = () => {
  return (
    <Grid m={10}>
      <Grid.Col span={8.5}>
        <Grid.Col>
          <Box style={{ border: "1px solid #1BAAF7" }} h={120}>
            <Carousel
              classNames={{
                slide: classes.mantineSlide,
                container: classes.mantineSlideContainer,
              }}
              controlsOffset="0"
              controlSize={35}
              // withIndicators
              slideSize="100px"
              slideGap="xl"
              align="start"
              // slidesToScroll={2}
              // onNextSlide={}
              onSlideChange={(e) => console.log("Current slide", e)}
            >
              <Carousel.Slide pr={0} style={{ border: "5px solid lightgreen" }}>
                Your story
              </Carousel.Slide>
              <Carousel.Slide pr={0}>
                <Image
                  radius="md"
                  w="100%"
                  fit="contain"
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
                />
              </Carousel.Slide>
              {data?.map((item, index) => {
                console.log(`${item}`);
                return (
                  <Carousel.Slide key={index} pr={0}>
                    <Image
                      radius="md"
                      w="100%"
                      // h="100%"
                      fit="contain"
                      src={`${item}`}
                    />
                  </Carousel.Slide>
                );
              })}
            </Carousel>
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
