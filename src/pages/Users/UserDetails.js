import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import api from '../../api';

function UserDetails() {
  const [user, setUser] = useState(null);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${params.bizon}`)
    .then(data => setUser(data));
  }, [params.bizon]);

  useEffect(() => {
    console.log('Field* changed');
  }, [user]);

  const handleDelete = () => {
    api.delete(`/users/${params.bizon}`) // API
    .then(() => history.push('/users')); // Browser router
  };

  return (
    <div>
        {user && <h1>{user.name} {user.surname}</h1>}
        <Link to="/users">&laquo; Go back</Link>
        <button onClick={handleDelete}>Remove user</button>
    </div>
  );
}

export default UserDetails;
