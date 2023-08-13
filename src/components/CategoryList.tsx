import { Category, CategoryType } from '@/module/inventory/types';
import clsx from 'clsx';

type Props = {
  categories?: CategoryType[];
  selectedCategory: Category | null;
  onClick: (category: Category) => void;
};

export const CategoryList = ({ categories, selectedCategory, onClick }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-start p-24">
      {categories?.map(({ name, category }: CategoryType) => (
        <span
          key={category}
          className={clsx(
            'mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300',
            {
              'border border-green-400': category === selectedCategory,
            }
          )}
          onClick={() => onClick(category)}
        >
          {name}
        </span>
      ))}
    </div>
  );
};
