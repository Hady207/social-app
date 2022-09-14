import { Request, Response } from 'express';
import { CategoryService } from '../services/category';
import catchAsync from '../utils/catchAsync';

const CategoryServiceI = new CategoryService();

export class CategoriesController {
  @catchAsync()
  async getCategory(req: Request, res: Response): Promise<void> {
    const categories = await CategoryServiceI.getCategories();
    res.status(200).json({
      status: 'success',
      data: categories,
    });
  }
  @catchAsync()
  async createCategory(req: Request, res: Response): Promise<void> {
    const categoryCreated = await CategoryServiceI.createCategory(req.body);
    res.status(201).json({
      status: 'success',
      data: categoryCreated,
    });
  }
}
