const data = [
  {id: 1, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
  {id: 2, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
  {id: 3, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
];

function Tickets() {
  return (
    <div className="tickets">
      {data.map(elem => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Tickets;
