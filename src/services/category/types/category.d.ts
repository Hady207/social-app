export type Category = {
  id: string;
  name?: Translation | null;
  translationId: string;
  Post?: Post[] | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type Translation = {
  id: string;
  text_en: string;
  text_ar: string;
  Category?: Category;
  createdAt?: Date;
  updatedAt?: Date | null;
};

export interface ICategroyService {
  getCategories(): Promise<Category[]>;
  getCategory(categoryId: string): Promise<Category | null>;
  createCategory(body: { nameEn: string; nameAr: string }): Promise<Category>;
  updateCategory(
    categoryId: string,
    body: { nameEn: string; nameAr: string },
  ): Promise<Category>;
  deleteCategories(): Promise<Category>;
  deleteCategory(categoryId: string): Promise<Category>;
}
