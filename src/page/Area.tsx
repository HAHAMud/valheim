import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { MediaCard, CardList } from '@/components/Card';
import Loading from '@/components/Loading';
import { useGetAreas } from '@/hooks';
import { AreaItemsType } from '@/module/area/type';

type Props = AreaItemsType;

export const Area = () => {
  const { isLoading, data: areaItems = [] } = useGetAreas();

  if (isLoading) return <Loading />;

  return (
    <CardList>
      {areaItems.map(({ name, photo, boss }: Props) => (
        <MediaCard
          key={name}
          title={name}
          extra={boss}
          photo={`area/${photo}.webp`}
          info="boss"
          icon={LocalFireDepartmentIcon}
          sx={{ maxHeight: 280, width: 320 }}
        />
      ))}
    </CardList>
  );
};
