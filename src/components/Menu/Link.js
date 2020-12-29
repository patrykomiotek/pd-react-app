import {NavLink} from 'react-router-dom';

// import {blue} from './colors';

const styles = {
  marginLeft: 6,
  marginRight: 6,
  textDecoration: 'none',
  // color: blue,
  // ':hover': {

  // }
  children: {
    margin: 10,
  },
};

function Link({to, children}) {
  return (
    <NavLink to={to} exact style={styles} activeClassName="Link--active">
      <span style={styles.children}>{children}</span>
    </NavLink>
  );
  // return <NavLink to={to} exact className="Link" activeClassName="active">{children}</NavLink>;
}

export default Link;
