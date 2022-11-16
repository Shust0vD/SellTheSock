import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../index';
import { editPersonalData, getUserInfo } from '../../API/userAPI';
import './account.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Account = () => {
  const { user } = useContext(Context);
  const userData = {...user.userInfo};
  const [firstname, setFirstname] = useState(userData.firstname);
  const [secondName, setSecondname] = useState(userData.secondName);
  const [phoneNumber, setPhonenumber] = useState(userData.phoneNumber);

  const changeInfo = async () => {
    let data = await editPersonalData(userData.id, firstname, secondName, phoneNumber);
    const userInfo = await getUserInfo(data.id);
    user.setUser(data);
    user.setUserInfo(userInfo);
  };

  return (
    <div className='accWrapper'>
    <div className="accContainer">
      <Container>
      <h1>Личный кабинет</h1>
      <h3>Ваш никнейм: {userData.username}</h3>
      <h3>Ваше имя: {userData.firstname}</h3>
      <h3>Ваша фамилия: {userData.secondName}</h3>
      <h3>Ваш номер телефона: {userData.phoneNumber}</h3>
      <h3>Ваша роль: {userData.role}</h3>

      
      <div className='btnWrapper'>
        <h2>Редактирование данных:</h2>
        <h3>Имя</h3>
        <input value={firstname} className="mt-3" placeholder="Введите Имя" onChange={(e) => setFirstname(e.target.value)} />
        <h3>Фамилия</h3>
        <input value={secondName} className="mt-3" placeholder="Введите Фамилию" onChange={(e) => setSecondname(e.target.value)} />
        <h3>Номер телефона</h3>
        {/*formatPhoneNumber - это функция, которая как раз сама  ваидирует номер. Лучше тут добавить функцию click, как в Auth, но тут уже как сам хочешь*/}
        <input value={formatPhoneNumber(phoneNumber)} className="mt-3" placeholder="Введите Номер телефона" onChange={(e) => setPhonenumber(e.target.value)} />  
      </div>
      <Button className="btnEdit" onClick={() => changeInfo()}>Редактировать</Button>
    </Container>
    </div>
    </div>
  );
};

export default Account;