import "../stylesheets/Table.css";
import React from "react";

function Table({ data }) {
  const [selected, setSelected] = React.useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  data.sort(function (a, b) {
    return b.score - a.score;
  });

  return (
    <div className="table-container">
      <h2 id="table-title">Tabla de posiciones</h2>
      <div className="table-info-container">
        {data.map((p, i) => {
          return (
            <>
              <div
                className="table-name"
                key={p.key.toString()}
                onClick={() => toggle(i)}
              >
                {p.name} <span className="score">{p.score}</span>
              </div>
              <div className={selected === i ? "history-show" : "history"}>
                {p.history.map((n, i) => {
                  return (
                    <p key={i.toString()} className={n < 0 ? "lost" : "won"}>
                      {n}
                    </p>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
