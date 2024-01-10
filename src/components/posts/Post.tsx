import React from "react";
import {
  IconHeart,
  IconMessageCircle,
  IconShare,
  IconUserPlus,
} from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Avatar,
  rem,
  Tooltip,
} from "@mantine/core";
import classes from "./Post.module.css";

const Post = () => {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group mb={10} justify="space-between">
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size="md"
            radius="xl"
            mr="xs"
          />
          <Text fz="md" fw={500} inline>
            Jack Smith
          </Text>
        </Center>
        <Tooltip label="Add Friend">
          <ActionIcon
            variant="default"
            // color="blue"
            radius="md"
            size="lg"
            style={{ width: "auto", height: "auto" }}
          >
            <IconUserPlus style={{ width: rem(20), height: rem(20) }} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Card.Section p={5}>
        <Image radius={5} src="https://i.imgur.com/Cij5vdL.png" fit="contain" />
      </Card.Section>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        Resident Evil Village review
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Group justify="space-between" w="100%">
          <Group>
            <Tooltip label="like post">
              <ActionIcon
                size="lg"
                variant="default"
                className={classes.action}
              >
                <IconHeart
                  style={{ width: rem(25), height: rem(25) }}
                  // color={theme.colors.red[6]}
                />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="comment">
              <ActionIcon
                size="lg"
                variant="default"
                className={classes.action}
              >
                <IconMessageCircle
                  style={{ width: rem(25), height: rem(25) }}
                  // color={theme.colors.blue[7]}
                />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Tooltip label="share">
            <ActionIcon size="lg" variant="default" className={classes.action}>
              <IconShare
                style={{ width: rem(25), height: rem(25) }}
                // color={theme.colors.green[6]}
              />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
};

export default Post;
