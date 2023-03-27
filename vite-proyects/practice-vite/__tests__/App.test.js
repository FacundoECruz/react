import React from 'react';
import ReactDOM from 'react-dom';
import App from "../src/App";
// import {render} from "@testing-library/react"
 
test('renders App heading when the app is running', () => { 
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<App />, div)
  console.log(document.body.innerHTML)
})



// const ui = render(<App />);
// // console.log(`Aca esta la UI: ${ui}`)
// const title = ui.screen.getByRole('heading', {  name: /app/i})
// expect(title).toBeInTheDocument();