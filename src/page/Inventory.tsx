import { useState } from 'react';
import { Category, InventoryItem } from '@/module/inventory/types';
import { useStoreActions } from '@/store';
import { useGetCategories, useGetInventoryItems } from '@/hooks';
import { MediaCard, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import { getObtainMethods } from '@/module/inventory';
import { CategoryList } from '@/components/CategoryList';

type Props = InventoryItem;

export const Inventory = () => {
  const [selected, setSelected] = useState<Category | null>('all');
  const { setBear } = useStoreActions();
  const { isFetching: isCategoriesLoading, data: categories } = useGetCategories();

  const { isFetching, data: items = [] } = useGetInventoryItems(selected);

  const onClickCategory = (category: Category) => {
    setSelected((val) => (val === category ? null : category));
  };

  const onClickItem = (item: Props) => {
    setBear(item);
  };

  if (isCategoriesLoading || isFetching) return <Loading />;

  return (
    <div>
      <CategoryList
        categories={[{ name: '全部', category: 'all' }, ...(categories || [])]}
        selectedCategory={selected}
        onClick={onClickCategory}
        sx={{ m: 6 }}
      />

      <CardList>
        {items.map((o) => (
          <MediaCard
            key={o.name}
            title={o.name}
            photo={`inventory/food/${o.photo}.png`}
            slug={String(o.stack)}
            info="獲取方式"
            extra={getObtainMethods(o.obtainMethods)}
            onClick={() => onClickItem(o)}
          />
        ))}
      </CardList>
    </div>
  );
};
