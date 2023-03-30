import React from 'react';
import App from "../src/App";
import Login from '../src/Login';
import {render, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

test('renders App heading when the app is running', async () => { 
  render(<App />)

  const increment = screen.getByRole('button', {name: '+'})
  const decrement = screen.getByRole('button', {name: '-'})
  const message = screen.getByText(/count/i)

  expect(message).toHaveTextContent('Count: 0')
  
  await userEvent.click(increment)
  expect(message).toHaveTextContent('Count: 1')

  await userEvent.click(decrement)
  expect(message).toHaveTextContent('Count: 0')
})

test('submitting the form calls onSubmit with username and password', async () => {
  let submittedData
  const handleSubmit = data => (submittedData = data)
  render(<Login onSubmit={handleSubmit} />)
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', { name: /submit/i})
  
  await userEvent.type(usernameField, 'elfacu')
  await userEvent.type(passwordField, 'gatorade')
  await userEvent.click(submitButton)

  expect(submittedData).toEqual({
    username: 'elfacu',
    password: 'gatorade'
  })
})

