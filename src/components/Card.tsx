import { AreaItemsType } from '@/moduel/area/type';

const Card = ({ item }: { item: AreaItemsType }) => {
  return (
    <div
      className={`bg-teal-500 flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg`}
    >
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-x-150 opacity-10"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-card"></div>
        <img className="relative w-full" src={item.photo} alt="" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{item.slug}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{item.name}</span>
          <span
            className={`text-teal-500 block bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center`}
          >
            $36.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
