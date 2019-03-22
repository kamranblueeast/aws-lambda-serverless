import { DataSource, Entity, ModelDefinition } from 'data-access-object';
import { dataSource } from '../config/config';

export class OrdersModel extends Entity {

    public static dataSource: DataSource = dataSource;

    public static definition: ModelDefinition = new ModelDefinition({
        name: 'Orders',
        properties: {
            device_type: Number,
            fleet_id: Number,
            total_rating: Number,
            total_rated_tasks: Number,
            fleet_thumb_image: String,
            fleet_image: String,
            has_gps_accuracy: Number,
            username: String,
            name: String,
            login_id: String,
            transport_type: String,
            transport_desc: String,
            license: String,
            email: String,
            phone: String,
            registration_status: Number,
            latitude: String,
            is_available: Boolean,
            longitude:String,
            last_updated_location_time: String,
            status: Number,
            team_id: Number,
            team_name: String,
            tags: String,
            last_updated_timings: String,
            fleet_status_color: String,
            view_status: Number,
            edit_status: Number

        }
    });

    public constructor(data?: Partial<OrdersModel>) {
        super(data);
    }
}
