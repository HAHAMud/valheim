import { CategoryType } from '@/module/category';
import { client } from './client';

export const getInventoryCategories = () => {
  return client.get<CategoryType[]>('inventory_categories.json').then((res) => res.data);
};

export const getCreatureCategories = () => {
  return client.get<CategoryType[]>('creature_categories.json').then((res) => res.data);
};
