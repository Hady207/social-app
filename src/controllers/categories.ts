import { Request, Response } from 'express';
import { CategoryService } from '../services/category';

const CategoryServiceI = new CategoryService();

export class CategoriesController {
  async getCategory(req: Request, res: Response) {
    const categories = await CategoryServiceI.getCategories();
    res.status(200).json({
      status: 'success',
      data: categories,
    });
  }
  async createCategory(req: Request, res: Response) {
    const categoryCreated = await CategoryServiceI.createCategory(req.body);
    res.status(201).json({
      status: 'success',
      data: categoryCreated,
    });
  }
}
