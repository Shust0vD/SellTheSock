import React, { useState, useEffect } from 'react';
import { getAll } from '../API/userAPI';
import UserSlot from '../components/UserSlot/UserSlot';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const data = await getAll();
      setUsers(data);
    }
    getUsers();
  }, [update]);

  return (
    <div>
      {users.map((user, index) => (
        <UserSlot user={user} key={index} />
      ))}
      <button onClick={() => setUpdate(!update)}>Обновить список пользователей</button>
    </div>
  );
};

export default Admin;
