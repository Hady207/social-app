export type Translation = {
  id: string;
  text_en: string;
  text_ar: string;
  Category?: Category;
  createdAt: Date;
  updatedAt?: Date;
};

export type Category = {
  id: string;
  name: Translation;
  translationId: string;
  Post: Post[];
  createdAt: Date;
  updatedAt?: Date;
};

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

export type Comments = {
  id: string;
  comment: string;
  likes: User[];
  dislikes: User[];
  commentedBy: User;
  commentorId: string;
  createdAt: Date;
  updatedAt?: Date;
  Post: Post;
  postId: string;
  commentsTheard: Comments[];
  Comments?: Comments;
  commentsId?: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  profile: string | null;
  password: string;
  location: string | null;
  role: 'USER' | 'EDITOR' | 'ADMIN';
  writtenPosts?: Post[];
  likedPosts?: Post[] | null;
  savedPosts?: Post[] | null;
  Comments?: Comments[];
  joinedDate: Date;
  followedBy?: User[];
  following?: User[];
  likedComments?: Comments[];
  dislikedComments?: Comments[];
};
