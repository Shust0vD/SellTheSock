import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {ADMIN_ROUTE, LOGIN_ROUTE, ADS_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar>
            <Container>
                <Button
                    onClick={() => navigate(ADS_ROUTE)}
                >
                    SellTheStock
                </Button>
                {user.isAuth ?
                    <Nav>
                        {user.user.role === 'admin' &&
                            <Button
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Администрация
                            </Button>
                        }
                        <Button
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav>
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
