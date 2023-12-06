import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./Login.module.css";

export function Login() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor href="/register" size="sm">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@gmail.com" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor href="/forgotPassword" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Go back to{" "}
        <Anchor size="sm" href="/">
          Homepage
        </Anchor>
      </Text>
    </Container>
  );
}
