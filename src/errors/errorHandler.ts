import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from './errorCode';
import { ErrorException } from './errorException';
import { ErrorModel } from './errorModel';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('Error handling middleware called.');
  console.log('Path:', req.path);
  console.error('Error occured:', err);
  if (err instanceof ErrorException) {
    res.status(err.status).json(err);
  } else {
    // For unhandled errors.
    res
      .status(500)
      .json({ code: ErrorCode.UnknownError, status: 500 } as ErrorModel);
  }
};
