import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PlayerGrid from "../components/PlayerGrid";

const playerData = {
  name: "Antone",
  score: 25,
  bet: 2,
  lost: 0,
}

describe("players grid", () => {
  it("should display name and score", () => {
    render(<PlayerGrid player={playerData} />);
    const name = screen.getByText(playerData.name);
    const score = screen.getByTestId("score");

    expect(name).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  });

  it("should display control buttons and bet/lost values", () => {
    render(<PlayerGrid player={playerData}/>)

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
