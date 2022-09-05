import { Request, Response } from 'express';
import { UserServices } from '../services/user';
import catchAsync from '../utils/catchAsync';

const UserService = new UserServices();
export class UserController {
  @catchAsync()
  async getUsers(req: Request, res: Response) {
    const users = await UserService.getUsers();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  }

  @catchAsync()
  async createUser(req: Request, res: Response) {
    const userCreated = await UserService.createUser(req.body);
    res.status(201).json({
      status: 'success',
      data: userCreated,
    });
  }

  @catchAsync()
  async deleteUsers(req: Request, res: Response) {
    await UserService.deleteUsers();
    res.status(204).json({
      status: 'success',
      data: 'users deleted',
    });
  }
}
