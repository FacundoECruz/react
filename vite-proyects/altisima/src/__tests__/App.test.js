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
    const round = screen.getByRole('heading', {  name: /round 1/i})
    const cards = screen.getByRole('p', { name: /cards to deal: 3/i})
    expect(round).toBeInTheDocument()
    expect(cards).toBeInTheDocument()
  });
});
