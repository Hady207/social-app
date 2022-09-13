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

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  router.post('/populatePosts', PostControllerRoute.populatePosts);
}

router.route('/like/:id').post(PostControllerRoute.likePost);
router.route('/save`/:id').post(PostControllerRoute.savePost);
router.route('/publish/:id').patch(PostControllerRoute.publishPost);
router.route('/unpublish/:id').patch(PostControllerRoute.unpublishPost);

export default router;
