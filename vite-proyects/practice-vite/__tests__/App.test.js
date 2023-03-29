import React from 'react';
import ReactDOM from 'react-dom';
import App from "../src/App";
// import {render} from "@testing-library/react"
 
test('renders App heading when t  he app is running', () => { 
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<App />, div)

  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.querySelector('h3')
  expect(message.textContent).toBe('Count: 0')

  increment.click()
  expect(message.textContent).toBe('Count: 1')

  decrement.click()
  expect(message.textContent).toBe('Count: 0')
})

