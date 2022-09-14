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
