import DBClient from '../models/prismaClient';

export class CategoryService {
  async getCategories() {
    const categories = await DBClient.instance.category.findMany({
      include: {
        name: true,
      },
    });
    return categories;
  }
  async createCategory(body: any) {
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
  }
}
