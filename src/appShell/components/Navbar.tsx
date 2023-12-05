import { useEffect, useState } from "react";
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  Skeleton,
} from "@mantine/core";
import {
  IconHome2,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconSearch,
  IconVideo,
  IconNotification,
  IconMessage,
} from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Navbar.module.css";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconSearch, label: "Search" },
  { icon: IconVideo, label: "Videos" },
  { icon: IconNotification, label: "Notifications" },
  { icon: IconMessage, label: "Messages" },
  { icon: IconSettings, label: "Settings" },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setLoading(true);
    };

    const handleWindowLoad = () => {
      setLoading(false);
    };

    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    window.addEventListener("load", handleWindowLoad);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  const links = mockdata.map((link, index) => (
    <>
      {!loading ? (
        <NavbarLink
          {...link}
          key={link.label}
          active={index === active}
          onClick={() => setActive(index)}
        />
      ) : (
        <Skeleton w={50} h={50} />
      )}
    </>
  ));

  return (
    <nav className={classes.navbar}>
      <Center>{/* <MantineLogo type="mark" size={30} /> */}</Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={5}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={5}>
        {!loading ? (
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        ) : (
          <Skeleton w={50} h={50} />
        )}
        {!loading ? (
          <NavbarLink icon={IconLogout} label="Logout" />
        ) : (
          <Skeleton w={50} h={50} />
        )}
      </Stack>
    </nav>
  );
}
