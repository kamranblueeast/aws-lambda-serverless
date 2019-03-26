import { OrdersRepository } from './orders.repository';
// import { resolve } from 'url';
// import { rejects } from 'assert';
// import { NotFoundResult } from '../../shared/errors';
// import { Order, GetOrderResult } from './orders.interfaces';
// var fs = require('fs');
// import { BadRequestResult } from '../../shared/errors';
var ObjectID = require('mongodb').ObjectID;

export class OrdersService {
  public constructor(private readonly _repo: OrdersRepository, private readonly _env: NodeJS.ProcessEnv) {
  }
  public postOrder(data: any) {
    // console.log("ser here " +data)
    return new Promise((resolve, reject) => {
      const defaultOrder: any = data;
      this._repo.Create(JSON.parse(defaultOrder)).then((res) => {
        //  console.log(res);
        resolve(true);
      });
      // console.log(order);
      // const result: GetOrderResult = {
      //   order

      // };
      // console.log(result);
      // fs.writeFile('myfile.json', JSON.stringify((order),null,4), function (err: any) {
      //   if (err) throw err;
      //   resolve(true);
      // });


    });
  }
  public getOrders() {

    return new Promise((resolve, rejects) => {
      this._repo.Find({}).then((order) => {
        resolve({ order })
      });
    });
  }

  public getOrderById(id: any) {
    // console.log("service id "+id)
    return new Promise((resolve, reject) => {
      this._repo.FindOne({ where: { id } }).then((order) => {
        // console.log(res);
        resolve({ order })
      });

    })

  }

  public updateOrder(id: any, data: any) {
    return new Promise((resolve, reject)=>{
      
      this._repo.FindOne({ where: {id } }).then((order) => {
        data.id = id;
        this._repo.UpdateById(data).then((res)=>{
          console.log("respomse here "+res);
          resolve(res);
        })
      
          // console.log(order)
        // const result = JSON.stringify(order)
        console.log("something "+order);
        // resolve(JSON.parse(result));
        resolve({order})

        
      });
      
    });
    // console.log("body data "+data)

    // const oldData: any =  await this._repo.FindOne({ where: { id } });
    // console.log("data by id "+ oldData);
    // if (!oldData) {
    //     throw new BadRequestResult('INVALID_ID', 'No resuld found.');
    // }

    // this.validate(data);

    // data._id = id;
    // console.log(data);
    // this._repo.UpdateById(data);
    // // const result = JSON.stringify(order)
    // // console.log("something "+order)
    // return true;
  }

  public deleteOrder(id: any) {
    
    var _id = { id: new ObjectID(id)};
    return new Promise((resolve, reject) => {
        this._repo.FindOne({ where: {id } }).then((order) => {
          if(!order) return resolve(false)
          this._repo.DeleteById(_id).then((res) => {
          
          // console.log("something "+id);
          resolve(true)
        }).catch((err)=>{
          console.log("Error "+err);
          reject(err);
        });
      
        
      });


    });
  };

};
