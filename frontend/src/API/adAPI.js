import { $authHost } from './index';

export const create = async (title, description, price, userId) => {
  const { data } = await $authHost.post('api/ad/create', { title, description, price, userId });
  return data;
};

export const getAll = async () => {
  const { data } = await $authHost.get('api/ad/all');
  return data;
};

export const getOne = async (id) => {
  const { data } = await $authHost.get('api/ad/:id' + id);
  return data;
};

export const getUserAds = async (id) => {
  const { data } = await $authHost.get('api/ad/user-ads/:id' + id);
  return data;
};

export const deleteAd = async (id) => {
  const { data } = await $authHost.post('api/ad/delete-ad/:id' + id);
  return data;
};
