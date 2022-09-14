import DBClient from '../../models/prismaClient';
import { User } from './types/user';
import { ErrorException } from '../../errors/errorException';

export class UserServices {
  async getUsers(): Promise<User[]> {
    try {
      const users = await DBClient.instance.user.findMany();
      return users;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async getUser(userId: string): Promise<User | string> {
    try {
      const user = await DBClient.instance.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user?.id) {
        return 'no user with that id';
      }
      return user;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async createUser(body: {
    username: string;
    password: string;
    email: string;
  }): Promise<User> {
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

  async updateUser(
    userId: string,
    body: {
      username: string;
      password: string;
      email: string;
    },
  ): Promise<User> {
    try {
      const { username, password, email } = body;
      const user = await DBClient.instance.user.update({
        where: {
          id: userId,
        },
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
    try {
      await DBClient.instance.user.deleteMany();
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }
}
