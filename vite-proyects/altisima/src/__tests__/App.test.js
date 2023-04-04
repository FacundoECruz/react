import * as React from 'react'
import App from "../App";
import {render, screen, cleanup} from '@testing-library/react'

afterEach(() => {
  cleanup();
});

describe('Annotator app', () => {
  it('displays current round and number of cards to be dealt', () => {
    render(<App />)
    screen.debug()
    const round = screen.getByRole('heading', {  name: /round/i})
    const cards = screen.getByText(/cards to deal:/i)
    expect(round).toBeInTheDocument()
    expect(cards).toBeInTheDocument()
  });

  it()
});

