import React from "react";
import Login from "../src/Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const buildLoginForm = () => {
  return {
    username: "elfacu",
    password: "gatorade",
  };
};

test("submitting the form calls onSubmit with username and password", async () => {
  const handleSubmit = jest.fn();

  render(<Login onSubmit={handleSubmit} />);

  const {username, password} = buildLoginForm()

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  await userEvent.type(usernameField, username);
  await userEvent.type(passwordField, password);
  await userEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
