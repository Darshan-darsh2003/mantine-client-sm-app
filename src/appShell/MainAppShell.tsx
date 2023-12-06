import { AppShell } from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";

interface MainAppShellProps {
  children?: React.ReactNode;
}

function MainAppShell({ children }: MainAppShellProps) {
  const { width } = useElementSize();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened] = useDisclosure(true);

  return (
    <AppShell
      navbar={{
        width: desktopOpened ? 80 : mobileOpened ? 40 : 0,
        breakpoint: "md",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      header={{ height: width < 550 ? 60 : 70 }}
    >
      <AppShell.Header
        px={40}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Header toggleMobile={toggleMobile} mobileOpened={mobileOpened} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main
        // style={{ height: appShellMainHeight, overflowY: "auto" }}
        pl={0}
        ml={{ xl: 80, lg: 80, md: 0, sm: 0, xs: 0 }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default MainAppShell;
