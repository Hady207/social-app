import { NextFunction, Response, Request } from 'express';

function catchAsync() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const methodOriginal = descriptor.value;

    descriptor.value = function (
      req: Request,
      res: Response,
      next: NextFunction,
    ) {
      try {
        const result = methodOriginal.call(this, req, res, next);

        // Check if method is asynchronous
        if (result && result instanceof Promise) {
          // Return promise
          return result.catch(next);
        }

        // Return actual result
        return result;
      } catch (error) {
        next(error);
      }
    };
    return descriptor;
  };
}
export default catchAsync;
