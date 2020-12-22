import { useState, useEffect, useRef } from 'react';

import './App.css';
import Link from './components/Link';
import Menu from './components/Menu';
import Footer from './components/Footer';

// const users = [
//   { id: 1, first: 'Ala', last: 'Kowalska' },
//   { id: 2, first: 'Jan', last: 'Maliniak' },
//   { id: 3, first: 'Ola', last: 'Fajna' }
// ];

function User(props) {
  const { first, last } = props;
  return <div>{first} {last}</div>;
};

function App() {
  const [name, setName] = useState('Patryk');
  const [surname, setSurname] = useState('O');
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const nameInputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
        setLoading(false);
      });
    }, 2000);
  }, []);

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
    nameInputRef.current.style.border = '#f00 1px solid';
    nameInputRef.current.value = '>!>!>!>!';

    fetch('https://a24b8d9cbdbcaaca93f2fc3eff6e913e.m.pipedream.net', { // TODO: fixme
      method: 'POST',
      body: JSON.stringify({ name, surname }),
      headers: {
        'Content-type': 'application/json'
      }
    });
  };
  const showIndicator = () => {
    // {isLoading ? <h4>Loading...</h4> : null}
    // {isLoading && <h4>Loading...</h4>}
    if (isLoading) {
      return <h4>Loading...</h4>;
    }
    return null;
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
            ref={nameInputRef}
            defaultValue={name}
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

      {showIndicator()}
      {users.map((elem) => (
        <User
          key={elem.login.uuid}
          first={elem.name.first}
          last={elem.name.last} />
      ))}

      <hr />
      <Footer />
    </div>
  );
}

export default App;
