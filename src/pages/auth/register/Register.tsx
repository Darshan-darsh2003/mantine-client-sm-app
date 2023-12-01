import React from 'react'
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
} from '@mantine/core';
import classes from './Register.module.css';
import { useForm } from '@mantine/form';

const Register = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },
  
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Hello There
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already Have an Account?{' '}
        <Anchor size="sm" component="button">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}

export default Register