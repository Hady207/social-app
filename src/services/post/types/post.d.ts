export type Post = {
  id: string;
  title: string;
  content?: string | null;
  image?: string | null;
  video?: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
  authorId: string;
  likedBy?: User[] | null;
  savedBy?: User[] | null;
  category?: Category | null;
  categoryId?: string | null;
  comments?: Comments[] | null;
};
