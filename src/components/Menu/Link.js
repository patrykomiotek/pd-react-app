import { NavLink } from 'react-router-dom';

function Link({ to, children  }) {
  return <NavLink to={to} exact className="Link" activeClassName="active">{children}</NavLink>;
}

export default Link;
