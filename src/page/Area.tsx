import { Card, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import { useGetAreas } from '@/hooks';
import { AreaItemsType } from '@/module/area/type';

type Props = AreaItemsType;

export const Area = () => {
  const { isLoading, data: areaItems = [] } = useGetAreas();

  if (isLoading) return <Loading />;

  return (
    <CardList>
      {areaItems.map(({ name, photo, boss, ...restArea }: Props) => (
        <Card
          key={name}
          title={name}
          extra={boss}
          photo={`area/${photo}.webp`}
          info="boss"
          minHeight={280}
          width={320}
          {...restArea}
        />
      ))}
    </CardList>
  );
};
