import { ApiHandler } from '../../shared/api.interfaces';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { OrdersService } from './orders.service';

const repo: OrdersRepository = new OrdersRepository();
const service: OrdersService = new OrdersService(repo, process.env);
const controller: OrdersController = new OrdersController(service);

export const postOrder: ApiHandler = controller.postOrder;
export const getOrder: ApiHandler = controller.getOrders;
export const getOrderById: ApiHandler = controller.getOrderById;
export const updateOrder: ApiHandler = controller.updateOrder;
export const deleteOrder: ApiHandler = controller.deleteOrder




