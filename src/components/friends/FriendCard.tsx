import React from "react";
import classes from "./FriendCard.module.css";
import {
  Avatar,
  Text,
  Group,
  Box,
  Paper,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { IconPhoneCall, IconAt, IconUserPlus } from "@tabler/icons-react";

export function FriendCard({img}:any) {
  return (
    <Box className={classes.friendCard}>
      <Group>
        <Paper
          withBorder
          py={10}
          px={20}
          style={{
            display: "flex",
            alignItems: "center",
            // gap: 20,
          }}
        >
          <Avatar
            src={img}
            size={100}
            radius="md"
          />
          <Box px={20}>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              Software engineer
            </Text>

            <Text
              fz="lg"
              style={{
                whiteSpace: "nowrap",
              }}
              fw={500}
              className={classes.name}
            >
              Robert Glassbreaker
            </Text>

            <Group wrap="nowrap" gap={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                robert@glassbreaker.io
              </Text>
            </Group>

            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall
                stroke={1.5}
                size="1rem"
                className={classes.icon}
              />
              <Text fz="xs" c="dimmed">
                +11 (876) 890 56 23
              </Text>
            </Group>
          </Box>
          <Box px={20}>
            <Tooltip label="Add Friend">
              <ActionIcon
                variant="default"
                // color="blue"
                radius="md"
                size="xl"
                style={{ width: "auto", height: "auto" }}
              >
                <IconUserPlus stroke={1.5} size="1rem" />
              </ActionIcon>
            </Tooltip>
          </Box>
        </Paper>
      </Group>
    </Box>
  );
}
