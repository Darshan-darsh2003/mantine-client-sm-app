import React from "react";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./ForgotPassword.module.css";
import ResetPassword from "./components/ResetPassword";

export function ForgotPassword() {
  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="you@gmail.com" required />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor
            c="dimmed"
            size="sm"
            href="/login"
            className={classes.control}
          >
            <Center inline>
              <IconArrowLeft
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }} className={classes.control}>Reset password</Button>
        </Group>
        <Group
>
      </Group>   
     </Paper>
     <Paper  withBorder shadow="md" p={30} radius="md" mt="xl">

        <ResetPassword/>
        </Paper>
    </Container>
  );
}
