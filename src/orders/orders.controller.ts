import { ApiCallback, ApiContext, ApiEvent, ApiHandler } from '../../shared/api.interfaces';
import { ErrorResult, ForbiddenResult, NotFoundResult } from '../../shared/errors';
import { ResponseBuilder } from '../../shared/response-builder';
import { OrdersService } from './orders.service';



export class OrdersController {
  public constructor(private readonly _service: OrdersService) {
  }

  public postOrder: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {

    const data = event.body;
    // console.log("cont here "+data)
    this._service.postOrder(data)
      .then((result) => {
        return ResponseBuilder.ok({ result, message: "Data posted successfully" }, callback);
      })
      .catch((error: ErrorResult) => {
        if (error instanceof NotFoundResult) {
          return ResponseBuilder.notFound(error.code, error.description, callback);
        }

        if (error instanceof ForbiddenResult) {
          return ResponseBuilder.forbidden(error.code, error.description, callback);
        }

        return ResponseBuilder.internalServerError(error, callback);
      });
  }
  

  
  public getOrders: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback) => {

    this._service.getOrders().then((res: any) => {
      // console.log(res);

      return ResponseBuilder.ok(res, callback);
    })

  }

  public getOrderById: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    // const data: any = event.body || '{}';
    const id: any = event.pathParameters.id || '{}';
    // console.log("ide here" +id)
    // console.log("data here" +data)
    this._service.getOrderById(id)
      .then((result) => {
        return ResponseBuilder.ok(result, callback);  // tslint:disable-line arrow-return-shorthand
      })
      .catch((error) => {
        console.log(error) 
          return ResponseBuilder.notFound(error,"Invalid Id",callback);
        

      });
  }

  public updateOrder: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    const data: any = JSON.parse(event.body || '{}');
    const id: any = event.pathParameters.id || '{}';
    // console.log("ide here" +id)
    // console.log("data here" +data)
    this._service.updateOrder(id,data)
      .then((result) => {
        return ResponseBuilder.ok(result, callback);  // tslint:disable-line arrow-return-shorthand
      })
      .catch((error) => {
        console.log(error) 
          return ResponseBuilder.notFound(error,"Invalid Id",callback);
        

      });
  }


  public deleteOrder: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    const id: any = event.pathParameters.id || '{}';
    this._service.deleteOrder(id)
      .then((result) => {
        if(result==false){
          return ResponseBuilder.ok({ result, message: "ID not found" }, callback);
        }
        return ResponseBuilder.ok({ result, message: "Order deleted successfully" }, callback);  // tslint:disable-line arrow-return-shorthand
      })
      .catch((error) => {
        console.log(error) 
          return ResponseBuilder.notFound(error,"Invalid Id",callback);
        

      });
  }

}

