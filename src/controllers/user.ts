import { Request, Response } from 'express';
import { UserServices } from '../services/user/user.service';
import catchAsync from '../utils/catchAsync';

const UserService = new UserServices();
export class UserController {
  @catchAsync()
  async getUsers(req: Request, res: Response): Promise<void> {
    const users = await UserService.getUsers();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  }

  @catchAsync()
  async getUser(req: Request, res: Response): Promise<void> {
    const user = await UserService.getUser(req.params.id);
    res.status(200).json({
      status: 'success',
      data: user,
    });
  }

  @catchAsync()
  async createUser(req: Request, res: Response): Promise<void> {
    const userCreated = await UserService.createUser(req.body);
    res.status(201).json({
      status: 'success',
      data: userCreated,
    });
  }

  @catchAsync()
  async deleteUsers(req: Request, res: Response): Promise<void> {
    await UserService.deleteUsers();
    res.status(204).json({
      status: 'success',
      data: 'users deleted',
    });
  }
}
