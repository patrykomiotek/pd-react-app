import PropTypes from 'prop-types';

import UserRow from './UserRow';

// function UsersContainer(props) {
//   const { filtersApplied, users, onRemove } = props;

function UsersContainer({ filtersApplied, users, onChange, onRemove }) {
  const results = users.length;

  return (
    <div className="users-container">
      {filtersApplied && !results && <p>No results 🙈</p>}
      {filtersApplied && results > 0 && <p>{results} results found 👌</p>}

      {users.map((elem) => (
        <UserRow
          key={elem.id}
          user={elem}
          onChange={onChange}
          onRemove={onRemove}
        />
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
