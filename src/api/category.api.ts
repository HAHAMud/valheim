import { CategoryType } from '@/module/category';
import { client } from './client';

export const getCategories = () => {
  return client.get<CategoryType[]>('categories.json').then((res) => res.data);
};
