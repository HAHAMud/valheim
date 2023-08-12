import { Card } from '@/components/Card/Card';
import { CardList } from '@/components/Card/CardList';
import { areaItems } from '@/module/area';
import { AreaItemsType } from '@/module/area/type';

export const Area = () => {
  return (
    <CardList>
      {areaItems.map(({ name, ...restArea }: AreaItemsType) => (
        <Card key={name} title={name} {...restArea} />
      ))}
    </CardList>
  );
};
