import { Request, Response } from 'express';
import { PostService } from '../services/post/post.service';
import catchAsync from '../utils/catchAsync';

const PostInstance = new PostService();

export class PostController {
  @catchAsync()
  async getPosts(req: Request, res: Response): Promise<void> {
    const posts = await PostInstance.getPosts(req.query);
    res.status(200).json({
      status: 'success',
      data: posts,
    });
  }

  @catchAsync()
  async getPost(req: Request, res: Response): Promise<void> {
    const post = await PostInstance.getPost(req.params.id);
    res.status(200).json({
      status: 'success',
      data: post,
    });
  }

  @catchAsync()
  async populatePosts(req: Request, res: Response): Promise<void> {
    const post = await PostInstance.populateTestPosts(req.body.postsNumber);
    res.status(200).json({
      status: 'success',
      data: post,
    });
  }

  @catchAsync()
  async createPost(req: Request, res: Response): Promise<void> {
    const postCreated = await PostInstance.createPost(req.body);
    res.status(201).json({
      status: 'success',
      data: postCreated,
    });
  }

  @catchAsync()
  async updatePost(req: Request, res: Response): Promise<void> {
    const updatedPost = await PostInstance.updatePost(req.params.id, req.body);

    res.status(202).json({
      status: 'success',
      data: updatedPost,
    });
  }

  @catchAsync()
  async publishPost(req: Request, res: Response): Promise<void> {
    const updatedPost = await PostInstance.publishPost(req.params.id);

    res.status(202).json({
      status: 'success',
      data: updatedPost,
    });
  }

  @catchAsync()
  async unpublishPost(req: Request, res: Response): Promise<void> {
    const updatedPost = await PostInstance.unpublishPost(req.params.id);

    res.status(202).json({
      status: 'success',
      data: updatedPost,
    });
  }

  @catchAsync()
  async deleteAllPosts(req: Request, res: Response): Promise<void> {
    await PostInstance.deletePosts();
    res.status(204).json({
      status: 'success',
      data: 'posts deleted',
    });
  }

  @catchAsync()
  async likePost(req: Request, res: Response): Promise<void> {
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
  async savePost(req: Request, res: Response): Promise<void> {
    const savedPost = await PostInstance.savePost(req.params.id, req.body.user);

    res.status(202).json({
      status: 'success',
      data: savedPost,
    });
  }
}
