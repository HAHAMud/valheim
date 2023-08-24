export interface PrimarySpawn {
  name: string;
}

export interface Creature {
  name: string;
  nameEN: string;
  photo: string;
  primary_spawn: PrimarySpawn[];
  base_hp: string;
  notes: string;
  category: string;
}
