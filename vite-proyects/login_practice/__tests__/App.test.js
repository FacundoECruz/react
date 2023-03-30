import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';
import Form from '../src/Form';

test('displays form for email and password and submit the data', async () => {
  const handleSubmit = jest.fn()

  render(<Form onSubmit={handleSubmit} />)

  const email = 'facu@gmail'
  const password = 'asdf'
  
  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledTimes(1)
})