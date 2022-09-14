import { Request, Response } from 'express';
import { emitWarning } from 'process';
import { CommentServices } from '../services/comment';
import catchAsync from '../utils/catchAsync';

const CommentInstance = new CommentServices();

export class CommentController {
  @catchAsync()
  async getComments(req: Request, res: Response): Promise<void> {
    const comments = await CommentInstance.getComments();
    res.status(200).json({
      status: 'success',
      data: comments,
    });
  }

  @catchAsync()
  async getComment(req: Request, res: Response): Promise<void> {
    const comments = await CommentInstance.getComment(req.params.id);
    res.status(200).json({
      status: 'success',
      data: comments,
    });
  }

  @catchAsync()
  async createComment(req: Request, res: Response): Promise<void> {
    const comment = await CommentInstance.createComment(req.body);
    res.status(200).json({
      status: 'success',
      data: comment,
    });
  }

  @catchAsync()
  async updateComment(req: Request, res: Response): Promise<void> {
    const comment = await CommentInstance.updateComment(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      status: 'success',
      data: comment,
    });
  }

  @catchAsync()
  async replayToComment(req: Request, res: Response): Promise<void> {
    const comment = await CommentInstance.replayComment(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      status: 'success',
      data: comment,
    });
  }

  @catchAsync()
  async deleteComments(req: Request, res: Response): Promise<void> {
    await CommentInstance.deleteComments();
    res.status(204).json({
      status: 'success',
      data: 'comments deleted',
    });
  }

  @catchAsync()
  async deleteComment(req: Request, res: Response): Promise<void> {
    await CommentInstance.deleteComment(req.params.id);
    res.status(204).json({
      status: 'success',
      data: 'comment deleted',
    });
  }
}
