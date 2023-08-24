import { useQuery } from 'react-query';
import { getCreatures } from '@/api/creature.api';
import { Category } from '@/module/category';

export const useGetCreatures = (category: Category | null) => {
  const { data = [], ...rest } = useQuery([getCreatures.name], () => getCreatures());

  if (category === 'all') return { data, ...rest };

  const filtered = category ? data.filter((item) => item.category === category) : data;

  return { data: filtered, ...rest };
};
