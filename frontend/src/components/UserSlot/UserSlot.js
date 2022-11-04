import React, { useState } from 'react';
import { changeRole, deleteUser } from '../../API/userAPI';
import './UserSlotStyles.css';

const UserSlot = ({ user }) => {
  const [isAdmin, setIsAdmin] = useState(user.role === 'admin');

  const handleChangeRole = () => {
    setIsAdmin(!isAdmin);
  };

  const saveChanges = async () => {
    const newRole = isAdmin ? 'admin' : 'user';
    if (newRole !== user.role) {
      await changeRole(user.id, newRole);
    }
  };

  const deleteUserFunc = async () => {
    await deleteUser(user.id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h4>{user.username}</h4>

      <p>User</p>
      <label className="switch">
        <input type="checkbox" checked={isAdmin} onChange={handleChangeRole} />
        <span className="slider round"></span>
      </label>
      <p>Admin</p>
      <button onClick={() => saveChanges()}>Сохранить роль</button>
      <button onClick={() => deleteUserFunc()}>Удалить пользователя</button>
    </div>
  );
};

export default UserSlot;
