import {render, screen} from '@testing-library/react'
import App from '../src/App';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

const createFormData = () => {
  return {
    email: 'hola@gmail.com',
    password: 'contrase'
  }
}

test('displays form for email and password', async () => {
  const handleSubmit = jest.fn()

  render(<App onSubmit={handleSubmit} />)

  const {email, password} = createFormData()

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  await userEvent.type(emailField, email)
  await userEvent.type(passwordField, password)
  await userEvent.click(submitButton)
  screen.debug()

  expect(handleSubmit).toHaveBeenCalledWith({
    email,
    password,
  })
})