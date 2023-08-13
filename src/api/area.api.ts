import { client } from './client';

export const getAreas = () => {
  return client.get('areas.json').then((res) => res.data);
};
