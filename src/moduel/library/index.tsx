import { FoodType, SidebarType } from './type';
import { GET_METHODS } from '@/moduel/common';
import raspberry from '@/assets/library/food/raspberry.png';
import blueberry from '@/assets/library/food/blueberry.png';
import cloudberry from '@/assets/library/food/cloudberry.png';
import mushroom from '@/assets/library/food/Mushroom.png';
import yellowMushroom from '@/assets/library/food/Yellow Mushroom.png';
import blueMushroom from '@/assets/library/food/Blue Mushroom.png';

export const LibrarySidebar: SidebarType[] = [
  {
    name: '莓果',
    category: 'berries',
  },
  {
    name: '蘑菇',
    category: 'mushrooms',
  },
];

// https://www.3dmgame.com/gl/3827513_27.html
export const Berries: FoodType[] = [
  {
    name: '覆盆子',
    life: 10,
    endurance: 20,
    recoverySecond: 1,
    durability: 600,
    maxCount: 50,
    get: GET_METHODS.COLLECTION,
    photo: raspberry,
  },
  {
    name: '藍莓',
    life: 15,
    endurance: 20,
    recoverySecond: 1,
    durability: 600,
    maxCount: 50,
    get: GET_METHODS.COLLECTION,
    photo: blueberry,
  },
  {
    name: '雲莓',
    life: 15,
    endurance: 25,
    recoverySecond: 1,
    durability: 800,
    maxCount: 50,
    get: GET_METHODS.COLLECTION,
    photo: cloudberry,
  },
  {
    name: '蘑菇',
    life: 15,
    endurance: 20,
    recoverySecond: 1,
    durability: 600,
    maxCount: 50,
    get: GET_METHODS.COLLECTION,
    photo: mushroom,
  },
  {
    name: '黃蘑菇',
    life: 20,
    endurance: 20,
    recoverySecond: 1,
    durability: 600,
    maxCount: 50,
    get: GET_METHODS.COLLECTION,
    photo: yellowMushroom,
  },
  {
    name: '藍蘑菇',
    life: 20,
    endurance: 20,
    recoverySecond: 1,
    durability: 600,
    maxCount: 50,
    get: GET_METHODS.UNKNOWN,
    photo: blueMushroom,
  },
];
