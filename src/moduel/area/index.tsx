import { AreaItemsType } from './type';
import blackForest from '@/assets/area/black-forest.webp';
import plains from '@/assets/area/plains.webp';
import mislands from '@/assets/area/mislands.webp';
import swamp from '@/assets/area/swamp.webp';
import mountains from '@/assets/area/mountains.webp';
import deepNorth from '@/assets/area/deep-north.webp';

export const areaItems: AreaItemsType[] = [
  {
    name: '黑森林',
    slug: 'black forest',
    photo: blackForest,
  },
  {
    name: '平原',
    slug: 'plain',
    photo: plains,
  },
  {
    name: '迷霧森林',
    slug: 'mislands',
    photo: mislands,
  },
  {
    name: '沼澤',
    slug: 'swamp',
    photo: swamp,
  },
  {
    name: '雪山',
    slug: 'snow mountain',
    photo: mountains,
  },
  {
    name: '北極',
    slug: 'deep north',
    photo: deepNorth,
  },
];
