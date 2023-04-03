import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';
import Form from '../src/Form';

test('displays form for email and password', async () => {
  render(<Form />)
  
  const emailField = screen.getByLabelText(/email/i)
  const passwordField = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole("button", { name: /submit/i })

  expect(emailField).toBeInTheDocument()
  expect(passwordField).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
})

test('should call handleSubmit when the submit button is clicked', async () => {
  const handleSubmit = jest.fn()
  render(<Form onSubmit={handleSubmit} />)
  
  const email = 'eve.holt@reqres.in'
  const password = 'cityslicka'
  
  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(handleSubmit).toBeCalledWith({
    email,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})