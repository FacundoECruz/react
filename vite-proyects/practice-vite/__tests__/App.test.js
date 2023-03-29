import React from 'react';
import ReactDOM from 'react-dom';
import App from "../src/App";
// import {render} from "@testing-library/react"
 
test('renders App heading when t  he app is running', () => { 
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<App />, div)

  const message = div.firstChild
  expect(message.textContent).toBe('App')
})

