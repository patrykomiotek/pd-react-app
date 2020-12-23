import { useState, useEffect } from 'react';

import User from '../../components/User';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
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
          key={elem.login.uuid}
          first={elem.name.first}
          last={elem.name.last} />
      ))}
    </div>
  );
}

export default Users;