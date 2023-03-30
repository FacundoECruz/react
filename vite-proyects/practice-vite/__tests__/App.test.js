import React from 'react';
import App from "../src/App";
import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

test('renders App heading when the app is running', () => { 
  render(<App />)

  const increment = screen.getByRole('button', {name: '+'})
  const decrement = screen.getByRole('button', {name: '-'})
  const message = screen.getByText(/count/i)

  expect(message).toHaveTextContent('Count: 0')
  
  fireEvent.click(increment)
  expect(message).toHaveTextContent('Count: 1')

  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Count: 0')
})

