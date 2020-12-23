import { useState, useEffect } from 'react';

import User from '../../components/User';
import api from '../../api';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      api.get('/users')
      .then(data => {
        const users = [];
        Object.entries(data).forEach(elem => {
          const user = { id: elem[0], ...elem[1] };
          users.push(user);
        });

        setUsers(users);
        setLoading(false);
      });
    }, 2000);
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
        <User
          key={elem.id}
          first={elem.name}
          last={elem.surname} />
      ))}
    </div>
  );
}

export default Users;