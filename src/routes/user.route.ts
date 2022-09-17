// router example

import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

const UserControllerRoute = new UserController();

router
  .route('/')
  .get(UserControllerRoute.getUsers)
  .post(UserControllerRoute.createUser)
  .delete(UserControllerRoute.deleteUsers);

router.route('/:id').get(UserControllerRoute.getUser);

export default router;
