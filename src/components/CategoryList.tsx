import { Button, ButtonGroup } from '@mui/material';
import { Category, CategoryType } from '@/module/inventory/types';

type Props = {
  categories?: CategoryType[];
  selectedCategory: Category | null;
  className?: Record<string, unknown>;
  onClick: (category: Category) => void;
};

export const CategoryList = ({ categories, selectedCategory, onClick, className }: Props) => {
  return (
    <ButtonGroup sx={{ ...className, flexWrap: 'wrap', spacing: '1rem' }}>
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
