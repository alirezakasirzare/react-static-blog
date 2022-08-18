import axios from 'axios';
import { useEffect, useState } from 'react';
import Default from '../layouts/Default';
import SimpleCardLink from '../components/cards/SimpleCardLink';

function Home() {
  // users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(response.data);
    })();
  }, []);

  // render
  return (
    <Default>
      <div className="row g-1">
        {users.map((user, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card">
                <SimpleCardLink path={`/users/${user.id}`} text={user.name} />
              </div>
            </div>
          );
        })}
      </div>
    </Default>
  );
}

export default Home;
