import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Category, InventoryItem } from '@/module/inventory/types';
import { useStoreActions } from '@/store';
import { useGetCategories, useGetInventoryItems } from '@/hooks';
import { MediaCard, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import { CategoryList } from '@/components/CategoryList';
import { DetailDrawer } from '@/components/DetailDrawer';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

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
    <Stack>
      <Box>
        <CategoryList
          categories={[{ name: '全部', category: 'all' }, ...(categories || [])]}
          selectedCategory={selected}
          onClick={onClickCategory}
          sx={{ mt: 6, mb: 3, ml: 6 }}
        />

        <CardList>
          {items.map((o) => (
            <MediaCard
              key={o.name}
              title={o.name}
              photo={`inventory/food/${o.photo}.png`}
              slug={String(o.stack)}
              info="取得處"
              icon={ModeStandbyIcon}
              extra={o.droppedBy?.map((i) => i.name).join(', ')}
              onClick={() => onClickItem(o)}
              sx={{ maxHeight: 190, maxWidth: 152 }}
            />
          ))}
        </CardList>
      </Box>
      <DetailDrawer />
    </Stack>
  );
};
