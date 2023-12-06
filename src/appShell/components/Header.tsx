import {
  Text,
  Group,
  useMantineColorScheme,
  rem,
  Image,
  SegmentedControl,
  Center,
  Box,
  Tooltip,
  Avatar,
  Menu,
  Burger,
} from "@mantine/core";
import {
  IconMoonStars,
  IconSun,
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { useElementSize } from "@mantine/hooks";
import React from "react";

interface HeaderProps {
  mobileOpened: boolean;
  toggleMobile: () => void;
}

const Header = ({ mobileOpened, toggleMobile }: HeaderProps) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { width } = useElementSize();

  return (
    <>
      <Group wrap="nowrap">
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="md"
          size="sm"
        />
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
        </Text>
      </Group>
      <Group>
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
                  <IconMoonStars style={{ width: rem(16), height: rem(16) }} />
                  <Box ml={10}>Dark</Box>
                </Center>
              ),
            },
          ]}
        />

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Tooltip label="Profile">
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                alt="it's me"
              />
            </Tooltip>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessageCircle
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              Messages
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconPhoto style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Gallery
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconSearch style={{ width: rem(14), height: rem(14) }} />
              }
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              leftSection={
                <IconArrowsLeftRight
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              Transfer my data
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={
                <IconTrash style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </>
  );
};

export default Header;
