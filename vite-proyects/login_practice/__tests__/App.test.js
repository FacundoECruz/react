import {render, screen} from '@testing-library/react'
import App from '../src/App';
import "@testing-library/jest-dom/extend-expect";

test('displays form for email and password', () => {
  render(<App />)

  

  screen.debug()
  // const emailField = screen.getByLabelText(/email/i);
  // const passwordField = screen.getByLabelText(/password/i);
  // const submitButton = screen.getByRole("button", { name: /submit/i });
})