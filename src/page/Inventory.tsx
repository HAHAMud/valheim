import { Category } from '@/components/Category';
import { BERRIES } from '@/module/inventory/constants';
import { getObtainMethods } from '@/module/inventory';
import { Card, CardList } from '@/components/Card';

export const Inventory = () => {
  // TODO: filter by category

  return (
    <div>
      <Category />

      <CardList>
        {BERRIES.map(({ name, photo, stack: maxCount, obtainMethods }) => (
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
