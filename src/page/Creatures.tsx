import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { Creature } from '@/module/creature/types';
import { Category } from '@/module/category/types';
import { useStoreActions } from '@/store';
import { useGetCreatureCategories, useGetCreatures } from '@/hooks';
import { MediaCard, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import { CategoryList } from '@/components/CategoryList';
import { DetailDrawer } from '@/components/DetailDrawer';

type Props = Creature;

export const Creatures = () => {
  const [selected, setSelected] = useState<Category | null>('all');
  const { setBear } = useStoreActions();
  const { isFetching: isCategoriesLoading, data: categories } = useGetCreatureCategories();
  const { isFetching, data: items = [] } = useGetCreatures(selected);

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
              photo={`creatures/${o.category}/${o.photo}.png`}
              info="取得處"
              icon={ModeStandbyIcon}
              extra={o.primary_spawn?.map((i) => i.name).join(', ')}
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
