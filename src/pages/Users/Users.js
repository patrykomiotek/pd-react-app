import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import api from '../../api';
import { objectToArray } from '../../utils';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // list of users
  const [filterValue, setFilterValue] = useState(''); // input
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/users')
    .then(data => {
      const users = objectToArray(data);
      setUsers(users);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const _filteredUsers = users.filter(
      elem => elem.name.toLowerCase() === filterValue.toLowerCase()
    );
    setFilteredUsers(_filteredUsers);
  }, [filterValue]);

  const handleFilterValue = (event) => {
    const nameValue = event.target.value;
    if (nameValue !== '') {
      setFiltersApplied(true);
    } else {
      setFiltersApplied(false);
    }
    setFilterValue(event.target.value);
    // fire filtering
  };

  const showIndicator = () => {
    // {isLoading ? <h4>Loading...</h4> : null}
    // {isLoading && <h4>Loading...</h4>}
    if (isLoading) {
      return <h4>Loading...</h4>;
    }
    return null;
  };

  const handleRemove = (event, id) => {
    console.log('id: ', id);
  };

  const handleRemoveFilter = () => {
    setFilterValue('');
    setFiltersApplied(false);
  };

  const usersToRender = filtersApplied ? filteredUsers : users;
  return (
    <div>
      {showIndicator()}

      {/* <UserFilter /> */}
      <div>
        <input type="text" value={filterValue} onChange={handleFilterValue} />
        {filterValue && <button onClick={handleRemoveFilter}>Remove filter</button>}
      </div>

      {/* <UserContainer /> */}
      {filtersApplied && !usersToRender.length && <p>No results 🙈</p>}
      {filtersApplied && usersToRender.length > 0 && <p>{usersToRender.length} results found 👌</p>}

      {usersToRender.map((elem) => (
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
          <span onClick={(event) => handleRemove(event, elem.id)}>Remove</span>
        </div>
      ))}
    </div>
  );
}

export default Users;
