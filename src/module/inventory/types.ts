export interface CategoryType {
  name: string;
  category: string;
}

const obtainMethods = ['collect', 'killBoss', 'killMob', 'fish', 'cook', 'unknown'] as const;
const processedBy = ['barbecue grill', 'cast iron pan', 'unknown'] as const;

export type ObtainMethod = (typeof obtainMethods)[number];
export type ProcessedBy = (typeof processedBy)[number];

export interface FoodType {
  /** 名稱 */
  name: string;

  /** 生命值 */
  life: number;

  /** 耐力值 */
  endurance: number;

  /** hp/sec 恢復 */
  healing: number;

  /** 恢復時間 */
  duration: number;

  /** 最大堆疊數量 */
  stack: number;

  /** 獲取方式 */
  obtainMethods: ObtainMethod[];

  /** 圖片 */
  photo: string;

  /** 用途 */
  usage: string;

  /** 加工方式 */
  processedBy?: ProcessedBy;
}
