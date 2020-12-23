import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../api';

function UserDetails() {
  const [user, setUser] = useState(null);
  const params = useParams();

  useEffect(() => {
    api.get(`/users/${params.bizon}`)
    .then(data => setUser(data));
  }, []);

  return (
    <div>
        {user && <h1>{user.name} {user.surname}</h1>}
        <Link to="/users">&laquo; Go back</Link>
    </div>
  );
}

export default UserDetails;
