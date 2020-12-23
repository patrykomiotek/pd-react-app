import './App.css';
import Menu, { Link } from './components/Menu';
import Footer from './components/Footer';
import Users from './pages/Users';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Menu>
        <Link url="https://onet.pl">Onet</Link>
        <Link url="https://wp.pl">WP</Link>
        <Link url="https://interia.pl">Interia</Link>
      </Menu>
      <hr />
      <Contact />
      <Users />
      <Home />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
