// Services example
import { ErrorException } from '../errors/errorException';
import DBClient from '../models/prismaClient';
import { PostInterface } from '../types/tablesTypes';
import { restApiFeatures } from '../utils/apiFeatures';

export class PostService {
  async getPosts(queries: any) {
    try {
      const queryData: any = restApiFeatures(queries);
      console.log(queryData);
      // const queryData: any = {
      //   orderBy: {
      //     createdAt: 'asc',
      //   },
      //   include: {
      //     likedBy: {
      //       select: {
      //         id: true,
      //       },
      //     },
      //     savedBy: {
      //       select: {
      //         id: true,
      //       },
      //     },
      //   },
      // };

      const posts = await DBClient.instance.post.findMany(queryData);
      return posts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async getPost(postId: string) {
    try {
      const post = await DBClient.instance.post.findUnique({
        where: {
          id: postId,
        },
        include: {
          likedBy: {
            select: {
              id: true,
              username: true,
            },
          },
          comments: true,
        },
      });
      return post;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async createPost(body: {
    title: string;
    category: { id: string };
    authorId: string;
  }) {
    try {
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
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  // Testing
  async populateTestPosts(postsNumber: number) {
    try {
      for (let i = 0; i < postsNumber; i++) {
        await DBClient.instance.post.create({
          data: {
            title: `this is the ${i} post in the appz`,
            category: {
              connect: {
                id: 'b5952809-98ad-457f-9150-d6c5ce387349',
              },
            },
            author: {
              connect: {
                id: '1ad0c85c-9595-48ff-a56e-0648035cd4d7',
              },
            },
          },
        });
      }
      return true;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async updatePost(
    postId: string,
    updatedBody: { title: string; content: string },
  ) {
    try {
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
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deletePosts() {
    try {
      const deletedPosts = await DBClient.instance.post.deleteMany();
      return deletedPosts;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
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

  async publishPost(postId: string) {
    try {
      return await DBClient.instance.post.update({
        where: {
          id: postId,
        },
        data: {
          published: true,
        },
      });
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async unpublishPost(postId: string) {
    try {
      return await DBClient.instance.post.update({
        where: {
          id: postId,
        },
        data: {
          published: false,
        },
      });
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
