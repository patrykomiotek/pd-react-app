import { createContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Menu, { Link } from './components/Menu';
import Footer from './components/Footer';
import Users from './pages/Users';
import UserDetails from './pages/Users/UserDetails';
import UserUpdate from './pages/Users/UserUpdate';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Counter from './components/Counter';

const themes = {
  blue: {
    color: 'blue'
  },
  red: {
    color: 'red'
  }
};
export const Theme = createContext(themes.red);
Theme.displayName = 'Theme';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/counter">Counter</Link>
        </Menu>
        <hr />
        <Switch>
          <Route path="/users/:bizon/update"><UserUpdate /></Route>
          <Route path="/users/:bizon"><UserDetails /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/counter">
            <Theme.Provider value={themes.blue}>
              <Counter />
            </Theme.Provider>
          </Route>
          <Route path="/" exact><Home /></Route>
        </Switch>
      </Router>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
