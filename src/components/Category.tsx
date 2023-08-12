import Loading from '@/components/Loading';
import useGetAPI from '@/hooks/useGetAPI';
import { CategoryType } from '@/module/inventory/types';

export const Category = () => {
  const { isLoading, data: categories } = useGetAPI('/data/categories.json');

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-wrap items-center justify-start p-24">
      {categories.map((item: CategoryType, index: number) => (
        <div key={index} className="m-2 rounded-lg bg-white p-2 text-teal-500">
          {item.name}
        </div>
      ))}
    </div>
  );
};
