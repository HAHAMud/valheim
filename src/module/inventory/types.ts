export type Category = 'all' | 'berries' | 'mushrooms' | 'cooked';

export interface CategoryType {
  name: string;
  category: Category;
}

const obtainMethods = ['collect', 'killBoss', 'killMob', 'fish', 'cook', 'unknown'] as const;
const droppedBy = ['barbecue grill', 'cast iron pan', 'unknown'] as const;
const craftingMaterials = ['unknown'] as const;

export type ObtainMethod = (typeof obtainMethods)[number];
export type DroppedBy = (typeof droppedBy)[number];
export type CraftingMaterials = (typeof craftingMaterials)[number];

export interface InventoryItem {
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

  /** 掉落方式 */
  droppedBy?: DroppedBy;

  /**分類 */
  category: Category;

  /** 食材 */
  craftingMaterials?: CraftingMaterials[];
}
