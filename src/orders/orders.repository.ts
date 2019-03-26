// import { Order } from './orders.interfaces'

import { DefaultCrudRepository } from 'data-access-object';
import { OrdersModel } from './orders.model';

export class OrdersRepository extends DefaultCrudRepository<OrdersModel> {
    public constructor() {
        super(OrdersModel);
        
    }

}



