import { DataSource } from 'data-access-object';

export const dataSource: DataSource = {
  config: {
     url: 'http://localhost:27017/orders'
  },
  name: 'mongodb',
};

