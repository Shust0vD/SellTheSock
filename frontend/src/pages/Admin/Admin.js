import React, { useState, useEffect } from 'react';
import { getAll } from '../../API/userAPI';
import UserSlot from '../../components/UserSlot/UserSlot';
import './AdminStyles.css';

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
    <div className="admWrapper">
      <div className="addContainer">
      {users.map((user, index) => (
        <UserSlot user={user} key={index} />
      ))}
      <button className="btnEdit" onClick={() => setUpdate(!update)}>Обновить список пользователей</button>
    </div>
    </div>
  );
};

export default Admin;
