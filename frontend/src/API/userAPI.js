import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (username, password) => {
  const { data } = await $host.post('api/user/registration', { username, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login = async (username, password) => {
  const { data } = await $host.post('api/user/login', { username, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getUserInfo = async (id) => {
  const { data } = await $host.get('api/user/info/' + id);
  return data;
};

export const editPersonalData = async (id, firstname, secondName, phoneNumber) => {
  const { data } = await $authHost.post('api/user/edit/' + id, { firstname, secondName, phoneNumber });
  return data;
};
