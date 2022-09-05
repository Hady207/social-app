import { Request, Response } from 'express';
import { PostService } from '../services/post';
import catchAsync from '../utils/catchAsync';

const PostInstance = new PostService();

export class PostController {
  async getPosts(req: Request, res: Response) {
    const posts = await PostInstance.getPosts();
    res.status(200).json({
      status: 'success',
      data: posts,
    });
  }

  async getPost(req: Request, res: Response) {
    const post = await PostInstance.getPost(req.params.id);
    res.status(200).json({
      status: 'success',
      data: post,
    });
  }

  async createPost(req: Request, res: Response) {
    const postCreated = await PostInstance.createPost(req.body);
    res.status(201).json({
      status: 'success',
      data: postCreated,
    });
  }

  async updatePost(req: Request, res: Response) {
    const updatedPost = await PostInstance.updatePost(req.params.id, req.body);

    res.status(202).json({
      status: 'success',
      data: updatedPost,
    });
  }

  async deleteAllPosts(req: Request, res: Response) {
    await PostInstance.deletePosts();
    res.status(204).json({
      status: 'success',
      data: 'posts deleted',
    });
  }

  @catchAsync()
  async likePost(req: Request, res: Response) {
    const likedPost = await PostInstance.toggleLike(
      req.params.id,
      req.body.user,
    );

    res.status(202).json({
      status: 'success',
      data: likedPost,
    });
  }

  @catchAsync()
  async savePost(req: Request, res: Response) {
    const savedPost = await PostInstance.savePost(req.params.id, req.body.user);

    res.status(202).json({
      status: 'success',
      data: savedPost,
    });
  }
}
