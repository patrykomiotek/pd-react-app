import { useContext } from 'react';

import { Theme } from '../../App';

function User(props) {
  const theme = useContext(Theme);
  const { first, last } = props;

  return (
    <span className="users-user">
      <span style={{ color: theme.color }}>{first} {last}</span>
    </span>
  );
};

export default User;
