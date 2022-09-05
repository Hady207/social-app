// router example

import { Router } from 'express';
import { CategoriesController } from '../controllers/categories';

const CategoryControllerRoute = new CategoriesController();

const router = Router();

router
  .route('/')
  .get(CategoryControllerRoute.getCategory)
  .post(CategoryControllerRoute.createCategory);

export default router;
