import { Link } from 'react-router-dom';

import User from './User';

// function UsersContainer(props) {
//   const { filtersApplied, users, onRemove } = props;

function UsersContainer({ filtersApplied, users, onRemove }) {
  const results = users.length;

  return (
    <div className="users-container">
      {filtersApplied && !results && <p>No results 🙈</p>}
      {filtersApplied && results > 0 && <p>{results} results found 👌</p>}

      {users.map((elem) => (
        <div key={elem.id}>
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
        </div>
      ))}
    </div>
  );
}

export default UsersContainer;
