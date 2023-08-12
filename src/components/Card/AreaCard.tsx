import { CardBg } from '@/assets/svg';
import { AreaItemsType } from '@/module/area/type';

export const AreaCard = ({ item }: { item: AreaItemsType }) => {
  return (
    <div
      className={`relative m-6 max-w-xs flex-shrink-0 overflow-hidden  rounded-lg bg-teal-500 shadow-lg`}
    >
      <CardBg />
      <div className="relative flex items-center justify-center px-10 pt-10">
        <div className="bg-card absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"></div>
        <img className="relative w-full" src={item.photo} alt="" />
      </div>
      <div className="relative mt-6 px-6 pb-6 text-white">
        <span className="-mb-1 block opacity-75">{item.slug}</span>
        <div className="flex justify-between">
          <span className="block text-xl font-semibold">{item.name}</span>
          {item.boss && (
            <span
              className={`block flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-teal-500`}
            >
              {item.boss}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
