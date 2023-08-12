import { AreaCard } from '@/components/Card';
import { areaItems } from '@/module/area';
import { AreaItemsType } from '@/module/area/type';

const Area = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-start p-24">
        {areaItems.map((area: AreaItemsType) => (
          <AreaCard key={area.name} item={area} />
        ))}
      </div>
    </div>
  );
};

export default Area;
