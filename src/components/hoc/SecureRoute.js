import { useContext } from 'react';
import { Route } from 'react-router-dom';

import { Auth } from '../../App';

function SecureRoute({ Component, ...restProps }) {
  const auth = useContext(Auth);
  const isLogged = auth.isLogged;

  if (isLogged) {
    return (
      <Route {...restProps}>
        <Component />
      </Route>
    );
  }

  return 'You have to log in';
}

export default SecureRoute;
