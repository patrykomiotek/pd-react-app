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
      <span onClick={(event) => onRemove(event, user.id)}>Remove</span>
    </div>
  );
}

/*<div key={elem.id}>
  <Link to={`/users/${elem.id}`}>
    <User
      first={elem.name}
      last={elem.surname} />
  </Link>
  {' '}
  <Link to={`/users/${elem.id}/update`}>
    Edit
  </Link>
  {' '}
  <span onClick={(event) => onRemove(event, elem.id)}>Remove</span>
</div>*/

export default UserRow;
