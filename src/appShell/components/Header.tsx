import {
  Text,
  Group,
  useMantineColorScheme,
  rem,
  Image,
  SegmentedControl,
  Center,
  Box,
  Burger,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
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
      </Group>
    </>
  );
};

export default Header;
