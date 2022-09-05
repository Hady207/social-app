import { Request, Response } from 'express';
import { CommentServices } from '../services/comment';
import catchAsync from '../utils/catchAsync';

const CommentInstance = new CommentServices();

export class CommentController {
  @catchAsync()
  async getComments(req: Request, res: Response) {
    const comments = await CommentInstance.getComments();
    res.status(200).json({
      status: 'success',
      data: comments,
    });
  }
  @catchAsync()
  async getComment(req: Request, res: Response) {
    const comments = await CommentInstance.getComment(req.params.id);
    res.status(200).json({
      status: 'success',
      data: comments,
    });
  }
  @catchAsync()
  async createComment(req: Request, res: Response) {
    const comment = await CommentInstance.createComment(req.body);
    res.status(200).json({
      status: 'success',
      data: comment,
    });
  }
  @catchAsync()
  async updateComment(req: Request, res: Response) {
    const comments = await CommentInstance.updateComment(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      status: 'success',
      data: comments,
    });
  }
  @catchAsync()
  async deleteComments(req: Request, res: Response) {
    await CommentInstance.deleteComments();
    res.status(204).json({
      status: 'success',
      data: 'posts deleted',
    });
  }
}
