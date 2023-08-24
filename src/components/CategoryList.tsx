import { Button, ButtonGroup, ButtonGroupProps } from '@mui/material';
import { Category, CategoryType } from '@/module/category/types';

type Props = {
  categories?: CategoryType[];
  selectedCategory: Category | null;
  sx?: ButtonGroupProps['sx'];
  onClick: (category: Category) => void;
};

export const CategoryList = ({ categories, selectedCategory, sx, onClick }: Props) => {
  return (
    <ButtonGroup sx={{ ...sx, flexWrap: 'wrap', spacing: '1rem' }}>
      {categories?.map(({ name, category }: CategoryType) => (
        <Button
          key={name}
          disabled={category === selectedCategory}
          onClick={() => onClick(category)}
        >
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
};
