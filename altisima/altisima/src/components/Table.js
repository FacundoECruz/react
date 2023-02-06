function Table({ data }) {

    data.sort(function(a, b) {
      return b.score - a.score;
    });
  
    return (
      <>
        <h2>Tabla de posiciones</h2>
        {data.map(p => {
         return <p key={p.key.toString()}>{p.name}: {p.score}</p>
        })}
      </>
    );
  }
  
  export default Table;