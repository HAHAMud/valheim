import { Button, ButtonGroup } from '@mui/joy';
import { Category, CategoryType } from '@/module/inventory/types';

type Props = {
  categories?: CategoryType[];
  selectedCategory: Category | null;
  className?: Record<string, unknown>;
  onClick: (category: Category) => void;
};

export const CategoryList = ({ categories, selectedCategory, onClick, className }: Props) => {
  return (
    <ButtonGroup
      spacing="1rem"
      aria-label="spacing button group"
      sx={{ ...className, flexWrap: 'wrap' }}
    >
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
