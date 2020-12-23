import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import Users from './Users';
import api from '../../api';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, setValue, handleChange];
}

function UserUpdate() {
  const [userName, setUserName, handleNameChange] = useInput('');
  const [userSurname, setUserSurname, handleSurnameChange] = useInput('');
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${params.bizon}`)
    .then(data => {
      setUserName(data.name);
      setUserSurname(data.surname);
    });
  }, [params.bizon]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // api call to save data
    api.patch(`/users/${params.bizon}`, { name: userName, surname: userSurname }) // API
    .then(() => history.push(`/users/${params.bizon}`)); // Browser router
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleNameChange} />
        <input type="text" value={userSurname} onChange={handleSurnameChange} />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/users">&laquo; Go back</Link>
      <Users />
    </div>
  );
}

export default UserUpdate;
