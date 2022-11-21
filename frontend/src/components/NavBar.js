import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { ADMIN_ROUTE, LOGIN_ROUTE, ADS_ROUTE, ACCOUNT_ROUTE, CREATURE_AD_ROUTE, MY_ADS_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setUserInfo({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
    navigate(ADS_ROUTE);
  };

  return (
    <Navbar className="navWrapper">
      <Container>
        <Nav className="navContainer">
          <NavLink className="logo" to={ADS_ROUTE}>
            SellTheStock
          </NavLink>
          {user.isAuth ? (
            <Nav>
              {user.isAdmin && (
                <Button className="btnNavBar" onClick={() => navigate(ADMIN_ROUTE)}>
                  Администрация
                </Button>
              )}
              <Button className="btnNavBar" onClick={() => navigate(ACCOUNT_ROUTE + '/' + user.userInfo.id)}>
                Личный кабинет
              </Button>
              <Button className="btnNavBar" onClick={() => navigate(CREATURE_AD_ROUTE)}>
                Создать объявление
              </Button>
              <Button className="btnNavBar" onClick={() => navigate(MY_ADS_ROUTE + '/' + user.userInfo.id)}>
                Мои объявления
              </Button>
              <Button className="btnNavBar" onClick={() => logOut()}>
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Button className="btnNavBar" onClick={() => navigate(LOGIN_ROUTE)}>
                Авторизация
              </Button>
            </Nav>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
