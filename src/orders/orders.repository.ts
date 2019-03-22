// import { DefaultCrudRepository } from 'data-access-object';
// import { OrdersModel } from './orders.model';
import { Order } from './orders.interfaces'


export class OrdersRepository {
    
    public exists(data: any): boolean {
      return data;
    }

    public postOrder(data: any): Order {
      return data;
    };
  
    
  }




