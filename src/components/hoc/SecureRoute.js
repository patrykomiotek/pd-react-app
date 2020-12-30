import { Route } from 'react-router-dom';

function SecureRoute({ Component, ...restProps }) {
  // console.log('Component: ', Component);
  const isLogged = true;

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
