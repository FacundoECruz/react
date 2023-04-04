import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Form from "../src/Form";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../src/App";

const token = "QpwL5tke4Pnpja7X4"

const server = setupServer(
  rest.post("https://reqres.in/api/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 4,
        token: token,
      })
    );
  })
);

beforeAll(() => server.listen())
afterAll(() => server.close())

test("displays form for email and password", async () => {
  render(<Form />);

  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("should call handleSubmit when the submit button is clicked", async () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);

  const email = "eve.holt@reqres.in";
  const password = "cityslicka";

  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(handleSubmit).toBeCalledWith({
    email,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test('should show loading spinner when submit button is clicked', async () => {
  render(<App />);

  const email = "eve.holt@reqres.in";
  const password = "cityslicka";

  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  const loading = screen.getByText(/loading/i)
  await waitForElementToBeRemoved(() => loading)
  screen.debug()
  expect(screen.getByText(token)).toBeInTheDocument()
})