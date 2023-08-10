import { AreaItemsType } from './type';
import greenPlains from '@/assets/area/green-plains.webp';
import blackForest from '@/assets/area/black-forest.webp';
import plains from '@/assets/area/plains.webp';
import mislands from '@/assets/area/mislands.webp';
import swamp from '@/assets/area/swamp.webp';
import mountains from '@/assets/area/mountains.webp';
import deepNorth from '@/assets/area/deep-north.webp';
import greenPlainsBoss from '@/assets/area/greenPlains/boss.jpeg';

export const areaItems: AreaItemsType[] = [
  {
    name: '青青草原',
    slug: 'green plains',
    photo: greenPlains,
    boss: '赤血靈鹿',
    bossPhoto: greenPlainsBoss,
  },
  {
    name: '黑森林',
    slug: 'black forest',
    photo: blackForest,
    boss: '古樹長老',
  },
  {
    name: '平原',
    slug: 'plain',
    photo: plains,
    boss: '雅格魯斯',
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
    boss: '邪骨惡靈',
  },
  {
    name: '雪山',
    slug: 'snow mountain',
    photo: mountains,
    boss: '冰霜龍母',
  },
  {
    name: '北極',
    slug: 'deep north',
    photo: deepNorth,
  },
];
