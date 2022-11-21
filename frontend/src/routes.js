import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ADS_ROUTE,
  ACCOUNT_ROUTE,
  CREATURE_AD_ROUTE,
} from './utils/consts';
import Ads from './pages/Ads';
import Auth from './pages/Auth';
import Account from './pages/Account/Account';
import Admin from './pages/Admin';
import CreatureAd from './pages/CreatureAd';

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const authRoutes = [
  {
    path: ACCOUNT_ROUTE + '/:id',
    Component: Account,
  },
  {
    path: CREATURE_AD_ROUTE,
    Component: CreatureAd,
  },
];

export const publicRoutes = [
  {
    path: ADS_ROUTE,
    Component: Ads,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
