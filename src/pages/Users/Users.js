import { useState, useEffect } from 'react';

import api from '../../api';
import { objectToArray } from '../../utils';
import { UsersFilter, UsersContainer } from '../../components/Users';

import './styles.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // list of users
  const [filterValue, setFilterValue] = useState(''); // input
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // service.getUsers()
    // api.getUsers()
    api.get('/users')
    .then(response => {
      const users = objectToArray(response.data);
      setUsers(users);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const _filteredUsers = users.filter(
      elem => elem.name.toLowerCase() === filterValue.toLowerCase()
    );
    setFilteredUsers(_filteredUsers);
  }, [users, filterValue]);

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

  const handleSelectedUser = (user) => (event) => {
    // console.log(event.target.checked);
    // console.log(user);
    if (event.target.checked) {
      setSelectedUser(user);
    }
  };

  const usersToRender = filtersApplied ? filteredUsers : users;
  return (
    <div className="users">
      {showIndicator()}

      <UsersFilter
        filterValue={filterValue}
        onFilterChange={handleFilterValue}
        onRemoveFilter={handleRemoveFilter}
      />

      <UsersContainer
        filtersApplied={filtersApplied}
        users={usersToRender}
        onRemove={handleRemove}
        onChange={handleSelectedUser}
      />
    </div>
  );
}

export default Users;
