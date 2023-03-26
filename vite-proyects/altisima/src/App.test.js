import App from "./App";
import {render, screen} from '@testing-library/react'

beforeEach(() => {
  render(<App />)
})

describe('Annotator app', () => {
  it('displays current round and number of cards to be dealt', () => {

    const round = screen.getByRole('heading', {  name: /round 1/i})
    const cards = screen.getByRole('p', { name: /cards to deal: 3/i})
    expect(round).toBeInTheDocument()
    expect(cards).toBeInTheDocument()
  });
});
