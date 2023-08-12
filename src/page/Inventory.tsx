import { Category } from '@/components/Category';
import { Card, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import useGetAPI from '@/hooks/useGetAPI';
import { FoodType } from '@/module/inventory/types';
import { getObtainMethods } from '@/module/inventory';

type Props = FoodType;

export const Inventory = () => {
  // TODO: filter by category
  const { isLoading: isBerriesLoading, data: berries } = useGetAPI('/data/berries.json');
  const { isLoading: isCookedLoading, data: cooked } = useGetAPI('/data/cooked.json');

  if (isBerriesLoading || isCookedLoading) return <Loading />;

  const foods = berries.concat(cooked);

  return (
    <div>
      <Category />

      <CardList>
        {foods.map(({ name, photo, stack, obtainMethods }: Props) => (
          <Card
            key={name}
            title={name}
            photo={`inventory/food/${photo}.png`}
            slug={String(stack)}
            extra={getObtainMethods(obtainMethods)}
          />
        ))}
      </CardList>
    </div>
  );
};
