import React from 'react'
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form'

const SignIn = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = (e) => {
    // console.log(formRef.current) // Можно ли получить из Ref значение полей?
    return (onSubmit(e, form.values), form.reset())
  }

  return (
    <form onSubmit={handleSubmit}
    >
      <TextInput
        type='email'
        label='Your email'
        placeholder="EMAIL"
        {...form.getInputProps('email')}
      />
      <TextInput
        type='password'
        label='Your password'
        placeholder="PASSWORD"
        {...form.getInputProps('password')}
      />
      <Button type="submit">Send Form</Button>
    </form>
  )
}

export default SignIn