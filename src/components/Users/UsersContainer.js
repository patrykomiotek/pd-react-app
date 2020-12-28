import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

UsersContainer.propTypes = {
  filtersApplied: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  onRemove: PropTypes.func
};

// users: PropTypes.arrayOf(
//   PropTypes.shape({
//     name: PropTypes.string,
//     lastname: PropTypes.string,
//     age: PropTypes.number
//   })
// ).isRequired

// {
//   name: String,
//   lastname: String,
//   age: Number
// }

export default UsersContainer;
