import { Link } from 'react-router-dom';

import User from './User';

function UserRow({ user, onChange, onRemove }) {
  return (
    <div className="users-user-row">
      <input type="checkbox" id={`u-${user.id}`} onChange={onChange(user)} />
      {' '}
      <label htmlFor={`u-${user.id}`}>
        <User first={user.name} last={user.surname} />
      </label>
      {' '}
      <Link to={`/users/${user.id}`}>
        Preview
      </Link>
      {' '}
      <Link to={`/users/${user.id}/update`}>
        Edit
      </Link>
      {' '}
      <span onClick={(event) => onRemove(event, user.id)}>Remove</span>
    </div>
  );
}

export default UserRow;
