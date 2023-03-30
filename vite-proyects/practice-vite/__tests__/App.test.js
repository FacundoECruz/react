import React from 'react';
import App from "../src/App";
import {render, fireEvent} from "@testing-library/react"

test('renders App heading when the app is running', () => { 
  const {container} = render(<App />)

  
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.querySelector('h3')
  console.log(message.innerHTML)
  expect(message.textContent).toBe('Count: 0')
  
  fireEvent.click(increment)
  expect(message.textContent).toBe('Count: 1')

  fireEvent.click(decrement)
  expect(message.textContent).toBe('Count: 0')
})

