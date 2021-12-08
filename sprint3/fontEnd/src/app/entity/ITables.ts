import {IOrders} from './IOrders';

export interface ITables {
  tableId: number;
  tableCode: string;
  tableStatus: string;
  location: string;
  maximumCapacity: string;
  availableFlag: boolean;
  deleteFlag: boolean;
  orders: IOrders[];
  onService: number;
}
