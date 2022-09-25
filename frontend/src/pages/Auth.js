import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, ADS_ROUTE } from '../utils/consts';
import { login, registration } from '../API/userAPI';
import { Context } from '../index';

const Auth = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const click = async () => {
    if (!isLogin && password !== passwordRepeat) {
      alert('Пароли не совпадают');
      return;
    }
    try {
      let data;
      if (isLogin) {
        data = await login(username, password);
      } else {
        data = await registration(username, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      user.setIsAdmin(data.role === 'admin' ? true : false);
      history(ADS_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container>
      <Card>
        <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form>
          <Form.Control
            className="mt-3"
            placeholder="Введите username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {!isLogin && (
            <Form.Control
              className="mt-3"
              placeholder="Повторите пароль..."
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              type="password"
            />
          )}
          <Row>
            {isLogin ? (
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button onClick={click}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
