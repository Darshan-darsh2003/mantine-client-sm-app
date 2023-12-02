import { AppShell } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";

interface MainAppShellProps {
  children?: React.ReactNode;
}

function MainAppShell({ children }: MainAppShellProps) {
  const { width } = useElementSize();

  return (
    <AppShell header={{ height: width < 550 ? 60 : 70 }}>
      <AppShell.Header
        px={40}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main ml={80}>{children}</AppShell.Main>
    </AppShell>
  );
}

export default MainAppShell;
