import { InventoryItem } from '@/module/inventory';
import { client } from './client';

export const getInventoryItems = () => {
  return client.get<InventoryItem[]>('inventory-items.json').then((res) => res.data);
};
