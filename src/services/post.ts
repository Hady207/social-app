// Services example
import { ErrorException } from '../errors/errorException';
import DBClient from '../models/prismaClient';
import { PostInterface } from '../types/tablesTypes';

export class PostService {
  async getPosts() {
    try {
      const posts = await DBClient.instance.post.findMany();
      return posts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async getPost(postId: string) {
    const post = await DBClient.instance.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        likedBy: true,
      },
    });
    return post;
  }

  async createPost(body: {
    title: string;
    category: { id: string };
    authorId: string;
  }) {
    const { title, category, authorId } = body;
    const post = await DBClient.instance.post.create({
      data: {
        title: title,
        category: {
          connect: {
            id: category.id,
          },
        },
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
    return post;
  }

  async updatePost(
    postId: string,
    updatedBody: { title: string; content: string },
  ) {
    const optionBody = {
      where: {
        id: postId,
      },
      data: {
        title: updatedBody.title,
        content: updatedBody.content,
      },
    };

    return await DBClient.instance.post.update(optionBody);
  }

  async deletePosts() {
    const deletedPosts = await DBClient.instance.post.deleteMany();
    return deletedPosts;
  }

  async deletePost(postId: string) {
    try {
      const deletedPosts = await DBClient.instance.post.delete({
        where: { id: postId },
      });
      return deletedPosts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  // toggling the like api
  async toggleLike(postId: string, user: { id: string }) {
    try {
      let updateOption: any;
      const selectedPost = await DBClient.instance.post.findUnique({
        select: {
          likedBy: {
            select: {
              id: true,
            },
          },
        },
        where: {
          id: postId,
        },
      });

      const likedByArr = selectedPost?.likedBy as [{ id: string }];

      if (likedByArr.some((e) => e.id === user.id)) {
        const newArray = likedByArr?.filter((u) => u.id === user.id);

        updateOption = {
          where: {
            id: postId,
          },
          data: {
            likedBy: {
              disconnect: newArray,
            },
          },
          include: {
            likedBy: true,
          },
        };
      } else {
        const newArray: { id: string }[] = [...likedByArr, user];
        updateOption = {
          where: {
            id: postId,
          },
          data: {
            likedBy: {
              connect: newArray,
            },
          },
          include: {
            likedBy: true,
          },
        };
      }

      const likedPost = await DBClient.instance.post.update(updateOption);
      return likedPost;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async savePost(postId: string, user: { id: string }) {
    try {
      let updateOption: any;
      const selectedPost = await DBClient.instance.post.findUnique({
        select: {
          savedBy: {
            select: {
              id: true,
            },
          },
        },
        where: {
          id: postId,
        },
      });

      const savedByArr = selectedPost?.savedBy as [{ id: string }];

      if (savedByArr.some((e) => e.id === user.id)) {
        const newArray = savedByArr?.filter((u) => u.id === user.id);

        updateOption = {
          where: {
            id: postId,
          },
          data: {
            savedBy: {
              disconnect: newArray,
            },
          },
          include: {
            savedBy: true,
          },
        };
      } else {
        const newArray: { id: string }[] = [...savedByArr, user];
        updateOption = {
          where: {
            id: postId,
          },
          data: {
            savedBy: {
              connect: newArray,
            },
          },
          include: {
            savedBy: true,
          },
        };
      }
      return await DBClient.instance.post.update(updateOption);
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }
}
