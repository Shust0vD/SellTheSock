import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../index';
import Ads from '../pages/Ads/Ads';
import { adminRoutes, authRoutes, publicRoutes } from '../routes';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAdmin &&
        adminRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} exact />)}
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} exact />)}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Ads />} />
    </Routes>
  );
});

export default AppRouter;
