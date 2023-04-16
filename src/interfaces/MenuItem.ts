export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type NewMenuItem = Omit<MenuItem, "id">;
