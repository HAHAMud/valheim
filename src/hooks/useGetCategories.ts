import { useQuery } from 'react-query';
import { getCategories } from '@/api/inventory.api';

export const useGetCategories = () => {
  return useQuery(getCategories.name, getCategories);
};
