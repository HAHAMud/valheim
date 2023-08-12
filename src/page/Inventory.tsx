import { Category } from '@/components/Category';
import { BERRIES } from '@/module/inventoryItem/constants';
import { CardList } from '@/components/Card/CardList';
import { Card } from '@/components/Card/Card';
import { getObtainMethods } from '@/module/inventoryItem';

export const Inventory = () => {
  // TODO: filter by category

  return (
    <div>
      <Category />

      <CardList>
        {BERRIES.map(({ name, photo, maxCount, obtainMethods }) => (
          <Card
            key={name}
            title={name}
            photo={photo}
            slug={String(maxCount)}
            extra={getObtainMethods(obtainMethods)}
          />
        ))}
      </CardList>
    </div>
  );
};
