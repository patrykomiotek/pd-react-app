import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import Menu, { Link } from './components/Menu';
import Footer from './components/Footer';
import Users from './pages/Users';
import UserDetails from './pages/Users/UserDetails';
import UserUpdate from './pages/Users/UserUpdate';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Counter from './components/Counter';
import Tickets from './pages/Tickets';
import ticketReducer from './pages/Tickets/duck';
import SecureRoute from './components/hoc/SecureRoute';

// TODO: move me somewhere else
const store = createStore(
  combineReducers({
    tickets: ticketReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'tickets/load'});
store.dispatch({type: 'tickets/add', payload: {id: 1, name: 'Ticket #abc', description: 'ssss'}});
store.dispatch({type: 'tickets/reset'});

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

const authData = {
  isLogged: true,
  user: {}
};
export const Auth = createContext(authData);
Auth.displayName = 'Auth';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/tickets">Tickets</Link>
          </Menu>
          <hr />
          <Switch>
            <Auth.Provider value={authData}>
              <SecureRoute path="/users/:bizon/update" Component={UserUpdate} />
              <SecureRoute path="/users/:bizon" Component={UserDetails} />
              <Theme.Provider value={themes.red}>
                <SecureRoute path="/users" Component={Users} />
              </Theme.Provider>
              <SecureRoute path="/contact" Component={Contact} />
              <Theme.Provider value={themes.blue}>
                <SecureRoute path="/counter" Component={Counter} />
              </Theme.Provider>
              <SecureRoute path="/tickets" Component={Tickets} />
              <Route path="/" exact><Home /></Route>
            </Auth.Provider>
          </Switch>
        </Router>
        <hr />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
