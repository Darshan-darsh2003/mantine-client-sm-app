import React from "react";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import classes from "./Register.module.css";
import { useForm } from "@mantine/form";

const Register = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      firstname: "",
      lastname: "",
    },

    validate: {
      email: (val: string) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
          ? null
          : "Invalid email",
      firstname: (val: string) =>
        val.length <= 2
          ? "First name should include at least 2 characters"
          : val.length > 30
          ? "First name must be less than 30 characters"
          : null,
      lastname: (val: string) =>
        val.length > 30 ? "Last name must be less than 30 characters" : null,
      password: (val: string) =>
        val.length < 8 ? "Password should include at least 8 characters" : null,
      confirm_password: (val: string, values) =>
        val !== values.password ? "Password does not match" : null,
    },
  });

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Hello there!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already Have an Account?{" "}
        <Anchor size="sm" href="/login">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <TextInput
            label="First Name"
            placeholder="John"
            withAsterisk
            error={form.errors.firstname}
            onChange={(e) =>
              form.setFieldValue("firstname", e.currentTarget.value)
            }
          />
          <TextInput
            label="Last Name"
            placeholder="Doe"
            error={form.errors.lastname}
            onChange={(e) =>
              form.setFieldValue("lastname", e.currentTarget.value)
            }
          />
          <TextInput
            label="Email"
            placeholder="user@example.com"
            withAsterisk
            autoComplete="new-email"
            error={form.errors.email}
            onChange={(e) => form.setFieldValue("email", e.currentTarget.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            autoComplete="new-password"
            withAsterisk
            error={form.errors.password}
            onChange={(e) =>
              form.setFieldValue("password", e.currentTarget.value)
            }
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Your password"
            withAsterisk
            error={form.errors.confirm_password}
            onChange={(e) =>
              form.setFieldValue("confirm_password", e.currentTarget.value)
            }
          />
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Go back to{" "}
        <Anchor size="sm" href="/">
          Homepage
        </Anchor>
      </Text>
    </Container>
  );
};

export default Register;
