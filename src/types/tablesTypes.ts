export interface PostInterface {
  id: string;
  title: string;
  content?: string;
  image?: string;
  video?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author?: string;
  authorId?: string;
  likedBy?: string[];
  savedBy?: string[];
  category?: string;
  categoryId?: string;
  comments?: string[];
}
