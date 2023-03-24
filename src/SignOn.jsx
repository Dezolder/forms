import React, { useState } from 'react'
import { Button, TextInput } from '@mantine/core';
import { Radio } from '@mantine/core';
import { Group } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { useForm } from "@mantine/form";

const SignOn = ({ onSubmit }) => {
  const [sex, setSex] = useState('')
  const form = useForm({
    initialValues: {
      name: '',
      nic: '',
      email: '',
      sex: '',
      password1: '',
      password2: ''
    }
  })

  const handleSubmit = (e) => {
    // console.log(sex)
    form.setFieldValue('sex', sex) 
    return (onSubmit(e, form.values), form.reset())
  }

  return (
    <form onSubmit={handleSubmit}
    >
      <TextInput
        label="Имя"
        name="name"
        type='text'
        error="This field might not be empty!"
        size="md"
        radius="lg"
        description="Please tell us your full name"
        placeholder="your name"
        {...form.getInputProps('name')}
      />
      <TextInput
        type='text'
        label='nic'
        placeholder="your nic"
        {...form.getInputProps('nic')}
      />
      <TextInput
        type='email'
        placeholder="EMAIL"
        label='Your email'
        icon={<IconAt size='0.8rem' />}
        {...form.getInputProps('email')}
      />
      <Radio.Group
        name="sex"
        label="Select your favorite sex"
        description="This is anonymous"
        withAsterisk
        value={sex}
        onChange={setSex}
      >
        <Group mt="xs">
          <Radio value='male' label="Male" color='blue' />
          <Radio value='female' label="Female" color='pink' />
        </Group>
      </Radio.Group>
      <TextInput
        name='password1'
        label='Your password'
        type='password'
        placeholder="PASSWORD"
        {...form.getInputProps('password1')}
      />
      <TextInput
        name='password2'
        label='Repeat your password'
        type='password'
        variant="unstyled"
        placeholder="REPEAT YOUR PASSWORD"
        {...form.getInputProps('password2')}
      />
      <Button type="submit" color='indigo'>Отправить</Button>
    </form>
  )
}

export default SignOn