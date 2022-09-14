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
