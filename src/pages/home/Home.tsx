import React from "react";
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  ScrollArea,
  Title,
  Tooltip,
  rem,
} from "@mantine/core";
import { IconPhotoPlus, IconSearch, IconSquarePlus } from "@tabler/icons-react";
import Stories from "../../components/stories/Stories";
import { FriendCard } from "../../components/friends/FriendCard";
import Post from "../../components/posts/Post";
// maxHeight: "calc(100vh - 200px)",

const Home = () => {
  const data = [
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
  ];

  return (
    <Grid m={10}>
      <Grid.Col span={{ xl: 8, lg: 8, md: 12, sm: 12, xs: 12 }}>
        <Grid>
          <Grid.Col>
            <Paper withBorder p={5}>
              <Group justify="space-between" p={10}>
                <Title py={5} order={3}>
                  Stories
                </Title>
                <Group>
                  <Tooltip label="Add Story">
                    <Button
                      variant="default"
                      leftSection={<IconSquarePlus stroke={1} size={25} />}
                    >
                      Add Story
                    </Button>
                  </Tooltip>
                </Group>
              </Group>
              <Divider />
              <Stories />
            </Paper>
          </Grid.Col>
          <Grid.Col span={12}>
            <Paper withBorder p={10}>
              <Group justify="space-between">
                <Title order={3}>Posts</Title>
                <Tooltip label="Add Story">
                  <Button
                    variant="default"
                    leftSection={<IconPhotoPlus stroke={1} size={25} />}
                  >
                    New Post
                  </Button>
                </Tooltip>
              </Group>

              <Divider my={10} />
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
                        px={{ xl: 40, lg: 20 }}
                        span={{ lg: 12, xl: 12, md: 12, sm: 12, xs: 12 }}
                      >
                        <Post />
                      </Grid.Col>
                    ))}
                </Grid>
              </ScrollArea.Autosize>
            </Paper>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={{ xl: 4, lg: 4, md: 12, sm: 12, xs: 12 }}>
        <Paper withBorder p={10}>
          <Grid
            p={5}
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   width: "100%",
            // }}
          >
            <Grid.Col span={5}>
              <Title w="100%" display="flex" order={3}>
                Your Friends
              </Title>
            </Grid.Col>
            <Grid.Col span={7}>
              <Autocomplete
                placeholder="Search Friend"
                leftSection={
                  <IconSearch
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
                data={[
                  "John Doe",
                  "Neil Azmuth",
                  "Jackie Chan",
                  "Wielder Smith",
                ]}
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
                    <FriendCard img={data[index]} />
                  </Grid.Col>
                ))}
            </Grid>
          </ScrollArea>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
