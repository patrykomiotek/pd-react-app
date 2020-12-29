import { NavLink } from 'react-router-dom';

const styles = {
  marginLeft: 6,
  marginRight: 6,
  textDecoration: 'none',
  color: '#2c3e50;'
};

function Link({ to, children  }) {
  return <NavLink to={to} exact style={styles} activeClassName="Link--active">{children}</NavLink>;
  // return <NavLink to={to} exact className="Link" activeClassName="active">{children}</NavLink>;
}

export default Link;
