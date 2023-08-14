import { useQuery } from 'react-query';
import { getInventoryItems } from '@/api/inventory.api';
import { Category } from '@/module/inventory';

export const useGetInventoryItems = (category: Category | null) => {
  const { data = [], ...rest } = useQuery([getInventoryItems.name], () => getInventoryItems());

  if (category === 'all') return { data, ...rest };

  const filtered = category ? data.filter((item) => item.category === category) : data;

  return { data: filtered, ...rest };
};
