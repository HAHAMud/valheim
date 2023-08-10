export interface SidebarType {
  name: string;
  category: string;
}

//
export interface FoodType {
  /** 名稱 */
  name: string;

  /** 生命值 */
  life: number;

  /** 耐力值 */
  endurance: number;

  /** 恢復時間 */
  recoverySecond: number;

  /** 耐久度 */
  durability: number;

  /** 最大數量 */
  maxCount: number;

  /** 獲取方式 */
  get: number;

  /** 圖片 */
  photo: string;
}
