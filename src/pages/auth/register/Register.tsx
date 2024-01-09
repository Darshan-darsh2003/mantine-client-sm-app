import React, { useState, useRef } from "react";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Avatar,
  Box,
  Grid,
} from "@mantine/core";
import classes from "./Register.module.css";
import { useForm } from "@mantine/form";
import UploadAvatarModal from "./components/UploadAvatarModal";
import { Autocomplete, Loader } from "@mantine/core";
import { Progress,  Group, Center } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconCheck, IconX } from '@tabler/icons-react';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

const Register = () => {
  const [fileUploadModal, setFileUploadModal] = useState(false);
  const timeoutRef = useRef<number>(-1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useInputState('');

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setEmail(val);
    form.setFieldValue("email",val)
    setData([]);

    if (val.trim().length === 0 || val.includes("@")) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ["gmail.com", "outlook.com", "yahoo.com"].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 1000);
    }
  };

  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));

  
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
        val.length < 8 ? "Please enter a valid password" : null,
      confirm_password: (val: string, values) =>
        val !== values.password ? "Password does not match" : null,
    },
  });

  return (
    <Container  my={40}>
      <UploadAvatarModal
        fileUploadModal={fileUploadModal}
        setFileUploadModal={setFileUploadModal}
      />
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
        <Grid>
       <Grid.Col>
       <Box className={classes.awatarBox}>
            <Avatar
            my={10}
              onClick={() => setFileUploadModal(true)}
              radius="xl"
              className={classes.awatar}
              size="lg"
            />
            <Text>Select Image</Text>
          </Box>
       </Grid.Col>
         <Grid.Col span={6}>
         <TextInput
            label="First Name"
            placeholder="John"
            withAsterisk
            error={form.errors.firstname}
            onChange={(e) =>
              form.setFieldValue("firstname", e.currentTarget.value)
            }
          />
         </Grid.Col>
         <Grid.Col span={6}>
          <TextInput
            label="Last Name"
            placeholder="Doe"
            error={form.errors.lastname}
            onChange={(e) =>
              form.setFieldValue("lastname", e.currentTarget.value)
            }
          />
          </Grid.Col>
          {/* <TextInput
            label="Email"
            placeholder="user@example.com"
            withAsterisk
            autoComplete="new-email"
            error={form.errors.email}
            onChange={(e) => form.setFieldValue("email", e.currentTarget.value)}
          /> */}
        <Grid.Col>
        <Autocomplete
        withAsterisk
            value={email}
            data={data}
            onChange={handleChange}
            autoComplete="new-email"
            error={form.errors.email}
            rightSection={loading ? <Loader size="1rem" /> : null}
            label="Email"
            placeholder="Your email"
          />

        </Grid.Col>
          {/* <PasswordInput
            label="Password"
            placeholder="Your password"
            autoComplete="new-password"
            withAsterisk
            error={form.errors.password}
            onChange={(e) =>
              form.setFieldValue("password", e.currentTarget.value)
            }
          /> */}
    <Grid.Col>
    <PasswordInput
        value={value}
        onChange={(e=>{
          setValue(e)
          form.setFieldValue("password", e.currentTarget.value)
        })}
        error={form.errors.password}
        placeholder="Your password"
        autoComplete="new-password"
        label="Password"
      />

      <Group gap={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement label="Has at least 8 characters" meets={value.length > 7} />
      {checks}
    </Grid.Col>
       <Grid.Col>
       <PasswordInput
            label="Confirm Password"
            placeholder="Your password"
            withAsterisk
            error={form.errors.confirm_password}
            onChange={(e) =>
              form.setFieldValue("confirm_password", e.currentTarget.value)
            }
          />
       </Grid.Col>

       <Grid.Col px="20%">
       <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            type="submit"
            fullWidth
            size="lg"
            mt="xl"
          >
            Sign Up
          </Button>
       </Grid.Col>
        </Grid>
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
