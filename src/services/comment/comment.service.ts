import DBClient from '../../models/prismaClient';
import { ErrorException } from '../../errors/errorException';
import { CommentBody } from './types/comment';

export class CommentServices {
  async getComments() {
    try {
      const comments = await DBClient.instance.comments.findMany({
        include: {
          commentedBy: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });
      return comments;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async getComment(commentId: string) {
    try {
      const comments = await DBClient.instance.comments.findUnique({
        where: {
          id: commentId,
        },
        include: {
          commentedBy: {
            select: {
              id: true,
              username: true,
              profile: true,
            },
          },
          commentsTheard: {
            include: {
              commentedBy: {
                select: {
                  id: true,
                  username: true,
                  profile: true,
                },
              },
            },
          },
        },
      });
      return comments;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async createComment(body: CommentBody) {
    try {
      const creationBody: any = {
        data: {
          comment: body.comment,
          Post: {
            connect: {
              id: body.postId,
            },
          },
          commentedBy: {
            connect: {
              id: body.userId,
            },
          },
        },
      };

      const comment = await DBClient.instance.comments.create(creationBody);
      return comment;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async updateComment(commentId: string, body: { comment: string }) {
    try {
      const updateBody: any = {
        where: { id: commentId },
        data: {
          comment: body.comment,
        },
      };

      const comment = await DBClient.instance.comments.update(updateBody);
      return comment;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deleteComments() {
    try {
      return await DBClient.instance.comments.deleteMany();
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async deleteComment(commentId: string) {
    try {
      const deletedComment = await DBClient.instance.comments.delete({
        where: {
          id: commentId,
        },
      });
      return deletedComment;
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async replayComment(commentId: string, body: CommentBody) {
    try {
      const updateBody: any = {
        where: { id: commentId },
        data: {
          commentsTheard: {
            create: {
              comment: body.comment,
              Post: {
                connect: {
                  id: body.postId,
                },
              },
              commentedBy: {
                connect: {
                  id: body.userId,
                },
              },
            },
          },
        },
      };

      return await DBClient.instance.comments.update(updateBody);
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }

  async updateRepliedComment(commentId: string, comment: string) {
    try {
    } catch (error: any) {
      throw new ErrorException(error.code, error.message);
    }
  }
}
