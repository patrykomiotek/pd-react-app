import { useState, useEffect } from 'react';

import api from '../../api';
import { objectToArray } from '../../utils';
import { UsersContainer } from '../../components/Users';
// import UsersContainer from '../../components/Users/UsersContainer';

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

      {/* <UsersFilter /> */}
      <div>
        <input type="text" value={filterValue} onChange={handleFilterValue} />
        {filterValue && <button onClick={handleRemoveFilter}>Remove filter</button>}
      </div>

      <UsersContainer
        filtersApplied={filtersApplied}
        users={usersToRender}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default Users;
