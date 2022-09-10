// router example

import { Router } from 'express';
import { CommentController } from '../controllers/comment';

const router = Router();

const CommentControllerRoute = new CommentController();

router
  .route('/')
  .get(CommentControllerRoute.getComments)
  .post(CommentControllerRoute.createComment)
  .delete(CommentControllerRoute.deleteComments);

router
  .route('/:id')
  .get(CommentControllerRoute.getComment)
  .post(CommentControllerRoute.replayToComment)
  .patch(CommentControllerRoute.updateComment)
  .delete(CommentControllerRoute.deleteComment);

export default router;
