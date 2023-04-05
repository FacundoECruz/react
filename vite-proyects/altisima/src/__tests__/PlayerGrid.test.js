import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PlayerGrid from "../components/PlayerGrid";

const player = {
  name: "Antone",
  score: 20,
};

describe("players grid", () => {
  it("should display name and score", () => {
    render(<PlayerGrid name={player.name} score={player.score} />);
    const name = screen.getByText(player.name);
    const score = screen.getByTestId("score");

    expect(name).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  });

  it("should display control buttons and bet/lost values", () => {
    const playerData = {
      name: "Antone",
      score: 25,
      bet: 2,
      lost: 0,
    }

    render(<PlayerGrid player={playerData}/>)

    screen.debug()

    const bet = screen.getByTestId("bet-value");
    const lost = screen.getByTestId("lost-value");
    const betUpButton = screen.getByTestId("bet-up-btn");
    const betDownButton = screen.getByTestId("bet-down-btn");
    const lostUpButton = screen.getByTestId("lost-up-btn");
    const lostDownButton = screen.getByTestId("lost-down-btn");

    expect(bet).toBeInTheDocument()
    expect(lost).toBeInTheDocument()
    expect(betUpButton).toBeInTheDocument()
    expect(betDownButton).toBeInTheDocument()
    expect(lostUpButton).toBeInTheDocument()
    expect(lostDownButton).toBeInTheDocument()
  });
});
