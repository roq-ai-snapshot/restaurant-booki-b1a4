import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  position: string;
  salary: number;
  hire_date: any;
  restaurant_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  user?: UserInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  restaurant_id?: string;
  user_id?: string;
}
