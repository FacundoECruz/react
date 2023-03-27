import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from "../src/App";

test('renders App when the app is running', () => { 
  const {container} = render(<App />)
  const title = screen.getByRole('heading', {  name: /app/i})
  expect(title).toBeInTheDocument()
})