import { CardType } from './types';
import { CardBg } from '@/assets/svg';

type Props = CardType;

export function Card({ photo, slug, title, extra }: Props) {
  return (
    <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-teal-500 shadow-lg">
      <div className="absolute left-0 top-0 mb-8 h-full w-full scale-x-150 opacity-10">
        <CardBg />
      </div>

      <div className="relative flex items-center justify-center px-10 pt-10">
        <img className="relative w-full" src={`/public/${photo}`} alt="" />
      </div>

      <div className="relative mt-6 px-6 pb-6 text-white">
        <span className="-mb-1 block opacity-75">{slug}</span>
        <div className="flex justify-between">
          <span className="block text-xl font-semibold">{title}</span>
          {extra && (
            <span className="flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-teal-500">
              {extra}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
