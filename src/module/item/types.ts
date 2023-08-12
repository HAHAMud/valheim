export interface SidebarType {
  name: string;
  category: string;
}

const obtainMethods = ['collect', 'killBoss', 'killMob', 'fish', 'cook', 'unknown'] as const;
export type ObtainMethod = (typeof obtainMethods)[number];

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

  /** 最大數量 */
  maxCount: number;

  /** 獲取方式 */
  obtainMethods: ObtainMethod[];

  /** 圖片 */
  photo: string;
}
