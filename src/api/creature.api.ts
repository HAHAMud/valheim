import { Creature } from '@/module/creature';
import { client } from './client';

export const getCreatures = () => {
  return client.get<Creature[]>('creatures.json').then((res) => res.data);
};
