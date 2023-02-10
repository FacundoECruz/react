import '../stylesheets/Table.css'

function Table({ data }) {
  data.sort(function (a, b) {
    return b.score - a.score;
  });

  return (
    <div className="table-container">
      <h2 id="table-title">Tabla de posiciones</h2>
      <div className="table-info-container">
        {data.map((p) => {
          return (
            <p className="table-name" key={p.key.toString()}>
              {p.name}: {p.score}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
