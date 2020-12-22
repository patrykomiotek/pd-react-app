import { useState } from 'react';

import './App.css';
import Link from './components/Link';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const [name, setName] = useState('Patryk');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <Menu>
        <Link url="https://onet.pl">Onet</Link>
        <Link url="https://wp.pl">WP</Link>
        <Link url="https://interia.pl">Interia</Link>
      </Menu>
      <div>
        <h1>Hi {name}!</h1>
        <input type="text" onChange={handleChange} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
