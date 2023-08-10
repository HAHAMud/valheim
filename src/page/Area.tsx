import Card from '@/components/Card';
import { areaItems } from '@/moduel/area';
import { AreaItemsType } from '@/moduel/area/type';

const Area = () => {
  return (
    <div>
      <div className="p-24 flex flex-wrap items-center justify-start">
        {areaItems.map((area: AreaItemsType) => (
          <Card key={area.name} item={area} />
        ))}
      </div>
    </div>
  );
};

export default Area;
