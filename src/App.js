import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Users from './pages/Users';
import UserDetails from './pages/Users/UserDetails';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
          <Link to="/" className="Link">Home</Link>
          <Link to="/users" className="Link">Users</Link>
          <Link to="/contact" className="Link">Contact</Link>
        </Menu>
        <hr />
        <Switch>
          <Route path="/users/:bizon"><UserDetails /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/" exact><Home /></Route>
        </Switch>
      </Router>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
