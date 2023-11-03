import { UserInterface } from 'interfaces/user';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_date: any;
  order_time: string;
  total_price: number;
  guest_id: string;
  menu_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_time?: string;
  guest_id?: string;
  menu_id?: string;
}
