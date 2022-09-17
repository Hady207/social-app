export type Category = {
  id: string;
  name: Translation;
  translationId: string;
  Post: Post[];
  createdAt: Date;
  updatedAt?: Date;
};

export type Translation = {
  id: string;
  text_en: string;
  text_ar: string;
  Category?: Category;
  createdAt: Date;
  updatedAt?: Date;
};

export interface ICategroyService {
  getCategories(): Promise<any[]>;
  createCategory(body: any): Promise<any>;
  updateCategory(categoryId: string, body: any): Promise<any>;
  deleteCategories(): Promise<any>;
  deleteCategory(categoryId: string): Promise<any>;
}
