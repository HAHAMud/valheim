import { CategoryType, InventoryItem } from '@/module/inventory';
import { client } from './client';

export const getCategories = () => {
  return client.get<CategoryType[]>('categories.json').then((res) => res.data);
};

export const getInventoryItems = () => {
  return client.get<InventoryItem[]>('inventory-items.json').then((res) => res.data);
};
