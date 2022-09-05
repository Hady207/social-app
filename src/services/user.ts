import catchAsync from '../utils/catchAsync';
import DBClient from '../models/prismaClient';
import { ErrorException } from '../errors/errorException';

export class UserServices {
  async getUsers() {
    const users = await DBClient.instance.user.findMany();
    return users;
  }

  async createUser(body: {
    username: string;
    password: string;
    email: string;
  }) {
    try {
      const { username, password, email } = body;
      const user = await DBClient.instance.user.create({
        data: {
          username,
          password,
          email,
        },
      });
      return user;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deleteUsers() {
    await DBClient.instance.user.deleteMany();
  }
}
