import { useQuery } from 'react-query';
import { getInventoryCategories, getCreatureCategories } from '@/api/category.api';

export const useGetInventoryCategories = () => {
  return useQuery(getInventoryCategories.name, getInventoryCategories);
};

export const useGetCreatureCategories = () => {
  return useQuery(getCreatureCategories.name, getCreatureCategories);
};
