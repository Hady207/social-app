// router example

import { Router } from 'express';
import { CategoriesController } from '../controllers/category.controller';

const CategoryControllerRoute = new CategoriesController();
const router = Router();

router
  .route('/')
  .get(CategoryControllerRoute.getCategories)
  .post(CategoryControllerRoute.createCategory);

router.route('/:id').get(CategoryControllerRoute.getCategory);

export default router;
