import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../index";
import Ads from "../pages/Ads";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const { user } = useContext(Context);

    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            <Route path="*" element={<Ads />} />
        </Routes>
    );
};

export default AppRouter;