import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PlayerGrid from "../components/PlayerGrid";

const player = {
  name: "Antone",
  score: 20,
};

describe("players grid", () => {
  it("should display name, score, bet, lost and buttons", () => {
    render(<PlayerGrid name={player.name} score={player.score} />);
    const name = screen.getByText(player.name);
    const score = screen.getByTestId("score");

    expect(name).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  });

  it("should display control buttons and bet/lost values", () => {
    const bet = screen.getByTestId("bet-value");
    const lost = screen.getByTestId("lost-value");
    const betUpButton = screen.getByTestId("bet-up-button");
    const betDownButton = screen.getByTestId("bet-down-button");
    const lostUpButton = screen.getByTestId("lost-up-button");
    const lostDownButton = screen.getByTestId("lost-down-button");

    expect(bet).toBeInTheDocument()
    expect(lost).toBeInTheDocument()
    expect(betUpButton).toBeInTheDocument()
    expect(betDownButton).toBeInTheDocument()
    expect(lostUpButton).toBeInTheDocument()
    expect(lostDownButton).toBeInTheDocument()
  });
});
