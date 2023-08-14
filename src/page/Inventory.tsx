import { useState } from 'react';
import { Card, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import { useGetCategories, useGetInventoryItems } from '@/hooks';
import { Category, InventoryItem } from '@/module/inventory/types';
import { getObtainMethods } from '@/module/inventory';
import { CategoryList } from '@/components/CategoryList';

type Props = InventoryItem;

export const Inventory = () => {
  const [selected, setSelected] = useState<Category | null>(null);
  const { isFetching: isCategoriesLoading, data: categories } = useGetCategories();

  const { isFetching, data: items = [] } = useGetInventoryItems(selected);

  const onClickCategory = (category: Category) => {
    setSelected((val) => (val === category ? null : category));
  };

  if (isCategoriesLoading || isFetching) return <Loading />;

  return (
    <div>
      <CategoryList categories={categories} selectedCategory={selected} onClick={onClickCategory} />

      <CardList>
        {items.map(({ name, photo, stack, obtainMethods }: Props) => (
          <Card
            key={name}
            title={name}
            photo={`inventory/food/${photo}.png`}
            slug={String(stack)}
            info="獲取方式"
            extra={getObtainMethods(obtainMethods)}
          />
        ))}
      </CardList>
    </div>
  );
};
