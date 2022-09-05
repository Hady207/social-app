// router example

import { Router } from 'express';
// import { UserController } from '#controllers/user';
import { UserController } from '../controllers/user';

const router = Router();

const UserControllerRoute = new UserController();

router
  .route('/')
  .get(UserControllerRoute.getUsers)
  .post(UserControllerRoute.createUser)
  .delete(UserControllerRoute.deleteUsers);

export default router;
