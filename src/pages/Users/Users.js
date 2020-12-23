import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import api from '../../api';
import { objectToArray } from '../../utils';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/users')
    .then(data => {
      const users = objectToArray(data);
      setUsers(users);
      setLoading(false);
    });
  }, []);

  const showIndicator = () => {
    // {isLoading ? <h4>Loading...</h4> : null}
    // {isLoading && <h4>Loading...</h4>}
    if (isLoading) {
      return <h4>Loading...</h4>;
    }
    return null;
  };

  return (
    <div>
      {showIndicator()}
      {users.map((elem) => (
        <Link key={elem.id} to={`/users/${elem.id}`}>
          <User
            first={elem.name}
            last={elem.surname} />
        </Link>
      ))}
    </div>
  );
}

export default Users;