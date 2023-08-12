import { FoodType, Category } from './types';
import raspberry from '@/assets/library/food/raspberry.png';
import blueberry from '@/assets/library/food/blueberry.png';
import cloudberry from '@/assets/library/food/cloudberry.png';
import mushroom from '@/assets/library/food/Mushroom.png';
import yellowMushroom from '@/assets/library/food/Yellow Mushroom.png';
import blueMushroom from '@/assets/library/food/Blue Mushroom.png';

export const CATEGORIES: Category[] = [
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
export const BERRIES: FoodType[] = [
  {
    name: '覆盆子',
    life: 10,
    endurance: 20,
    healing: 1,
    duration: 600,
    maxCount: 50,
    obtainMethods: ['collect'],
    photo: raspberry,
  },
  {
    name: '藍莓',
    life: 15,
    endurance: 20,
    healing: 1,
    duration: 600,
    maxCount: 50,
    obtainMethods: ['collect'],
    photo: blueberry,
  },
  {
    name: '雲莓',
    life: 15,
    endurance: 25,
    healing: 1,
    duration: 800,
    maxCount: 50,
    obtainMethods: ['collect'],
    photo: cloudberry,
  },
  {
    name: '蘑菇',
    life: 15,
    endurance: 20,
    healing: 1,
    duration: 600,
    maxCount: 50,
    obtainMethods: ['collect'],
    photo: mushroom,
  },
  {
    name: '黃蘑菇',
    life: 20,
    endurance: 20,
    healing: 1,
    duration: 600,
    maxCount: 50,
    obtainMethods: ['collect'],
    photo: yellowMushroom,
  },
  {
    name: '藍蘑菇',
    life: 20,
    endurance: 20,
    healing: 1,
    duration: 600,
    maxCount: 50,
    obtainMethods: ['unknown'],
    photo: blueMushroom,
  },
];
