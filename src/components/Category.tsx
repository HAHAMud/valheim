import { CATEGORIES } from '@/module/inventoryItem/constants';
import { CategoryType } from '@/module/inventoryItem/types';

export const Category = () => {
  return (
    <div className="flex flex-wrap items-center justify-start p-24">
      {CATEGORIES.map((item: CategoryType, index: number) => (
        <div key={index} className="m-2 rounded-lg bg-white p-2 text-teal-500">
          {item.name}
        </div>
      ))}
    </div>
  );
};
