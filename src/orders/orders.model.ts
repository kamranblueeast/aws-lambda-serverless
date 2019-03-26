import { DataSource, Entity, ModelDefinition } from 'data-access-object';
import { dataSource } from '../config/config';

export class OrdersModel extends Entity {

    public static dataSource: DataSource = dataSource;

    public static definition: ModelDefinition = new ModelDefinition({
        name: 'Orders',
        properties: {
            country: String,
            name: String,
            phone: Number,
            address: String,
            ntn: Number
        }
    });

    public constructor(data?: Partial<OrdersModel>) {
        super(data);
    }
}
