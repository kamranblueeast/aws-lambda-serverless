import { ApiCallback, ApiContext, ApiEvent, ApiHandler } from '../../shared/api.interfaces';
import { ErrorResult, ForbiddenResult, NotFoundResult } from '../../shared/errors';
import { ResponseBuilder } from '../../shared/response-builder';
import { OrdersService } from './orders.service';



export class OrdersController {
  public constructor(private readonly _service: OrdersService) {
  }
  // post order start here

  public postOrder: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    // Input validation.
    // if (!event.pathParameters){
    //   return ResponseBuilder.badRequest(ErrorCode.MissingId, 'Please specify the city ID!', callback);
    // }

    // if (isNaN(+event.pathParameters.id)) {
    //   return ResponseBuilder.badRequest(ErrorCode.InvalidId, 'The city ID must be a number!', callback);
    // }

    const data = JSON.parse(event.body);
    console.log("cont here "+data)
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
  // post order ends here

  // get order starts here
  public getOrders: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback) => {

    this._service.getOrders().then((res: any) => {

      return ResponseBuilder.ok(res, callback);
    })

  }

  public updateOrder: ApiHandler = (event: ApiEvent, context: ApiContext, callback: ApiCallback): void => {
    const id = +event.pathParameters.id;
    console.log("update order id here "+id);
    const data = JSON.parse(event.body);
    this._service.updateOrder(id, data)
      .then((result) => {
        return ResponseBuilder.ok(result, callback);  // tslint:disable-line arrow-return-shorthand
      })
      .catch((error) => {
        console.log(error) 
          return ResponseBuilder.notFound(error,"Invalid Id",callback);
        

      });
  }

}

