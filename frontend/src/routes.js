import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ADS_ROUTE,
  ACCOUNT_ROUTE,
  CREATURE_AD_ROUTE,
  MY_ADS_ROUTE,
} from './utils/consts';
import Ads from './pages/Ads';
import Auth from './pages/Auth';
import Account from './pages/Account/Account';
import Admin from './pages/Admin';
import CreatureAd from './pages/CreatureAd';
import MyAds from './pages/MyAds';

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
  {
    path: MY_ADS_ROUTE + '/:id',
    Component: MyAds,
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
