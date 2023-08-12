import { Card, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import useGetAPI from '@/hooks/useGetAPI';
import { AreaItemsType } from '@/module/area/type';

type Props = AreaItemsType;

export const Area = () => {
  const { isLoading, data: areaItems } = useGetAPI('/data/areas.json');

  if (isLoading) return <Loading />;

  return (
    <CardList>
      {areaItems.map(({ name, photo, ...restArea }: Props) => (
        <Card key={name} title={name} {...restArea} photo={`area/${photo}.webp`} />
      ))}
    </CardList>
  );
};
