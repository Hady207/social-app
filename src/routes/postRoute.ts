// router example

import { Router } from 'express';
import { PostController } from '../controllers/post';

const PostControllerRoute = new PostController();

const router = Router();

router
  .route('/')
  .get(PostControllerRoute.getPosts)
  .post(PostControllerRoute.createPost)
  .delete(PostControllerRoute.deleteAllPosts);

router
  .route('/:id')
  .get(PostControllerRoute.getPost)
  .patch(PostControllerRoute.updatePost);

router.route('/likePost/:id').post(PostControllerRoute.likePost);
router.route('/savePost/:id').post(PostControllerRoute.savePost);

export default router;
