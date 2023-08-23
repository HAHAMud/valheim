import { useQuery } from 'react-query';
import { getCategories } from '@/api/category.api';

export const useGetCategories = () => {
  return useQuery(getCategories.name, getCategories);
};
