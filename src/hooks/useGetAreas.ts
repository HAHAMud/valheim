import { useQuery } from 'react-query';
import { getAreas } from '@/api/area.api';

export const useGetAreas = () => {
  return useQuery(getAreas.name, getAreas);
};
