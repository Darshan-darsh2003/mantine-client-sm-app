import React from "react";
import { Autocomplete, Grid, ScrollArea, Title, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Stories from "../../components/stories/Stories";
import { FriendCard } from "../../components/friends/FriendCard";
import Post from "../../components/posts/Post";
// maxHeight: "calc(100vh - 200px)",

const Home = () => {
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
              xl: "75vh",
              lg: "75vh",
              // md: "500px",
              // sm: "500px",
              // xs: "500px",
            }}
            // style={{ border: "1px solid #1BAAF7" }}
          >
            <Grid p={5}>
              {Array(10)
                .fill(null)
                .map((element, index) => (
                  <Grid.Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    span={{ lg: 6, xl: 6, md: 6, sm: 6, xs: 12 }}
                  >
                    <Post />
                  </Grid.Col>
                ))}
            </Grid>
          </ScrollArea.Autosize>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={{ xl: 3.5, lg: 3.5, md: 12, sm: 12, xs: 12 }}>
        <Grid
          p={5}
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   width: "100%",
          // }}
        >
          <Grid.Col span={6}>
            <Title w="100%" display="flex" order={3}>
              Your Friends
            </Title>
          </Grid.Col>
          <Grid.Col span={6}>
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
          </Grid.Col>
        </Grid>
        <ScrollArea
          h={{ xl: "90vh", lg: "90vh" }}
          // w="100%"
          // style={{ border: "1px solid #1BAAF7" }}
        >
          <Grid p={5}>
            {Array(10)
              .fill(null)
              .map((element, index) => (
                <Grid.Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  span={{ lg: 12, xl: 12, md: 6, sm: 6, xs: 12 }}
                >
                  <FriendCard />
                </Grid.Col>
              ))}
          </Grid>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
