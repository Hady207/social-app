import DBClient, { IDBClient } from '../../models/prismaClient';
import { ErrorException } from '../../errors/errorException';
import { ICategroyService, Category } from './types/category';

export class CategoryService implements ICategroyService {
  private categoryModal: IDBClient;
  constructor() {
    this.categoryModal = DBClient;
  }

  async getCategories(): Promise<Category[]> {
    try {
      const categories = await this.categoryModal.instance.category.findMany({
        include: {
          name: true,
        },
      });
      return categories;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async getCategory(categoryId: string): Promise<Category | null> {
    try {
      const category = await this.categoryModal.instance.category.findUnique({
        where: {
          id: categoryId,
        },
      });
      return category;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async createCategory(body: {
    nameEn: string;
    nameAr: string;
  }): Promise<Category> {
    try {
      const category = await DBClient.instance.category.create({
        data: {
          name: {
            create: {
              text_en: body.nameEn,
              text_ar: body.nameAr,
            },
          },
        },
      });
      return category;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async updateCategory(
    categoryId: string,
    body: { nameEn: string; nameAr: string },
  ): Promise<Category> {
    try {
      const category = await DBClient.instance.category.update({
        where: { id: categoryId },
        data: {
          name: {
            create: {
              text_en: body.nameEn,
              text_ar: body.nameAr,
            },
          },
        },
      });
      return category;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deleteCategories(): Promise<any> {
    try {
      return await DBClient.instance.category.deleteMany();
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deleteCategory(categoryId: string): Promise<Category> {
    try {
      const deletedCategory = await DBClient.instance.category.delete({
        where: {
          id: categoryId,
        },
      });
      return deletedCategory;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }
}
