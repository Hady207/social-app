import DBClient from '../../models/prismaClient';
import { ErrorException } from '../../errors/errorException';

export class CategoryService {
  async getCategories(): Promise<any[]> {
    try {
      const categories = await DBClient.instance.category.findMany({
        include: {
          name: true,
        },
      });
      return categories;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async createCategory(body: any): Promise<any> {
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

  async updateCategory(categoryId: string, body: any): Promise<any> {
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

  async deleteCategories() {
    try {
      return await DBClient.instance.category.deleteMany();
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deleteCategory(categoryId: string) {
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
