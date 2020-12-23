import { useState, useEffect } from 'react';

import './App.css';
import Menu, { Link } from './components/Menu';
import Footer from './components/Footer';
import User from './components/User';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      <hr />
      <Contact />
      <Home />

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
