import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/App";

test("renders App heading when the app is running", async () => {
  render(<App />);

  const increment = screen.getByRole("button", { name: "+" });
  const decrement = screen.getByRole("button", { name: "-" });
  const message = screen.getByText(/count/i);

  expect(message).toHaveTextContent("Count: 0");

  await userEvent.click(increment);
  expect(message).toHaveTextContent("Count: 1");

  await userEvent.click(decrement);
  expect(message).toHaveTextContent("Count: 0");
});

  

