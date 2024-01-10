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
  IconLogout,
  IconSwitchHorizontal,
  IconSearch,
  IconVideo,
  IconNotification,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

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
  { icon: IconHome2, label: "Home", link: "/app/" },
  { icon: IconSearch, label: "Search", link: "/app/search" },
  { icon: IconVideo, label: "Videos", link: "/app/videos" },
  {
    icon: IconNotification,
    label: "Notifications",
    link: "/app/notifications",
  },
  { icon: IconMessage, label: "Conversation", link: "/app/conversation" },
  { icon: IconUser, label: "Profile", link: "/app/profile" },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();


  const links = mockdata.map((link, index) => (
    <>
        <NavbarLink
          {...link}
          key={link.label}
          active={index === active}
          onClick={() => {
            setActive(index);
            navigate(link.link);
          }}
        />
      
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
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />

        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
