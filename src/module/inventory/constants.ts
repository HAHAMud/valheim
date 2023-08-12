import { CategoryType, FoodType } from './types';
import raspberry from '@/assets/library/food/raspberry.png';
import blueberry from '@/assets/library/food/blueberry.png';
import cloudberry from '@/assets/library/food/cloudberry.png';
import mushroom from '@/assets/library/food/Mushroom.png';
import yellowMushroom from '@/assets/library/food/Yellow Mushroom.png';
import blueMushroom from '@/assets/library/food/Blue Mushroom.png';

export const CATEGORIES: CategoryType[] = [
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
    stack: 50,
    obtainMethods: ['collect'],
    photo: raspberry,
    usage: '',
  },
  {
    name: '藍莓',
    life: 15,
    endurance: 20,
    healing: 1,
    duration: 600,
    stack: 50,
    obtainMethods: ['collect'],
    photo: blueberry,
    usage: '',
  },
  {
    name: '雲莓',
    life: 15,
    endurance: 25,
    healing: 1,
    duration: 800,
    stack: 50,
    obtainMethods: ['collect'],
    photo: cloudberry,
    usage: '',
  },
  {
    name: '蘑菇',
    life: 15,
    endurance: 20,
    healing: 1,
    duration: 600,
    stack: 50,
    obtainMethods: ['collect'],
    photo: mushroom,
    usage: '',
  },
  {
    name: '黃蘑菇',
    life: 20,
    endurance: 20,
    healing: 1,
    duration: 600,
    stack: 50,
    obtainMethods: ['collect'],
    photo: yellowMushroom,
    usage: '',
  },
  {
    name: '藍蘑菇',
    life: 20,
    endurance: 20,
    healing: 1,
    duration: 600,
    stack: 50,
    obtainMethods: ['unknown'],
    photo: blueMushroom,
    usage: '',
  },
];
