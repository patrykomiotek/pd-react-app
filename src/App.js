import { useState } from 'react';

import './App.css';
import Link from './components/Link';
import Menu from './components/Menu';
import Footer from './components/Footer';

const users = [
  { id: 1, first: 'Ala', last: 'Kowalska' },
  { id: 2, first: 'Jan', last: 'Maliniak' },
  { id: 3, first: 'Ola', last: 'Fajna' }
];

function User(props) {
  const { first, last } = props;
  return <div>{first} {last}</div>;
};

function App() {
  const [name, setName] = useState('Patryk');
  const [surname, setSurname] = useState('O');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'name') { // TODO: refactor
      setName(value);
    } else if (name === 'surname') {
      setSurname(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, surname);
    fetch('https://a24b8d9cbdbcaaca93f2fc3eff6e913e.m.pipedream.net', { // TODO: fixme
      method: 'POST',
      body: JSON.stringify({ name, surname }),
      headers: {
        'Content-type': 'application/json'
      }
    });
  };
  return (
    <div className="App">
      <Menu>
        <Link url="https://onet.pl">Onet</Link>
        <Link url="https://wp.pl">WP</Link>
        <Link url="https://interia.pl">Interia</Link>
      </Menu>
      <div>
        <h1>Hi {name} {surname}!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange} />
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={handleChange} />
          <input type="submit" value="Send" />
        </form>
      </div>
      <hr />

      {users.map((elem) => {
        return <User key={elem.id} first={elem.first} last={elem.last} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
