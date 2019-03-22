import { OrdersRepository } from './orders.repository';
import { NotFoundResult } from '../../shared/errors';
import { Order, GetOrderResult } from './orders.interfaces';
var fs = require('fs');

export class OrdersService {
  public constructor(private readonly _repo: OrdersRepository, private readonly _env: NodeJS.ProcessEnv) {
  }
  public postOrder(data: any) {
    // console.log("ser here")
    return new Promise((resolve, reject) => {
      if (!this._repo.exists(data)) {
        reject(new NotFoundResult('UNKNOWN_DETAIL', 'There is no Order !'));
        return;
      }

      const defaultOrder: any = data;
      const order: Order = this._repo.postOrder(defaultOrder);
      // console.log(order);
      // const result: GetOrderResult = {
      //   order

      // };
      // console.log(result);
      fs.writeFile('myfile.json', JSON.stringify((order),null,4), function (err: any) {
        if (err) throw err;
        resolve(true);
      });


    });
  }
  public getOrders() {

    return new Promise((resolve, rejects) => {
      fs.readFile('myfile.json', (err: any, data: any) => {
        const result = JSON.parse(data);
        resolve(result);
      });
    })

  }

  public updateOrder(id:any, updateData: any) {

    // console.log(id)
    // console.log(updateData)
    return new Promise((resolve, reject) => {
      fs.readFile('myfile.json', (err: any, data: any) => {
        const result = JSON.parse(data);
        // console.log(result);
        // console.log(result.id)
        if (result.id == id) {
          fs.writeFile('myfile.json',JSON.stringify((updateData),null,2), (err: any) => {
            resolve(true);
          })
        } else{
          // console.log("tati error")
          reject(false);
        }

      });
    })

  }

}

