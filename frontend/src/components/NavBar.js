import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ADMIN_ROUTE, LOGIN_ROUTE, ADS_ROUTE, ACCOUNT_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
    navigate(ADS_ROUTE);
  };

  return (
    <Navbar>
      <Container>
        <Nav>
          <NavLink to={ADS_ROUTE}>SellTheStock</NavLink>
          {user.isAuth ? (
            <Nav>
              {user.isAdmin && <Button onClick={() => navigate(ADMIN_ROUTE)}>Администрация</Button>}
              <Button onClick={() => navigate(ACCOUNT_ROUTE)}>Личный кабинет</Button>
              <Button onClick={() => logOut()}>Выйти</Button>
            </Nav>
          ) : (
            <Nav>
              <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
