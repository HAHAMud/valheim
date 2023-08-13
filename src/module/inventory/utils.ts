import { InventoryItem, ObtainMethod } from '.';

export const obtainMethodLabel: Record<ObtainMethod, string> = {
  collect: '採集',
  killBoss: '擊殺魔王',
  killMob: '擊殺怪物',
  fish: '釣魚',
  cook: '烹飪',
  unknown: '未知',
} as const;

export const getObtainMethods = (obtainMethods: InventoryItem['obtainMethods']) =>
  obtainMethods.map((method) => obtainMethodLabel[method]).join(', ');
