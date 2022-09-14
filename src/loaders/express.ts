import { Express, json, urlencoded } from 'express';

import userRoute from '../routes/user.route';
import postRoute from '../routes/post.route';
import categoryRoute from '../routes/category.route';
import commentRoute from '../routes/comment.route';

import { errorHandler } from '../errors/errorHandler';

interface expressInterface {
  app: Express;
}

const expressLoader = ({ app }: expressInterface) => {
  // Body parser, reading data from body into req.body
  app.use(json({ limit: '10kb' }));
  app.use(urlencoded({ extended: true, limit: '10kb' }));

  // adding routes as middleware here
  // app.get('/', (req, res) => res.send('hello docker104'));

  app.use('/api/v1/user', userRoute);
  app.use('/api/v1/post', postRoute);
  app.use('/api/v1/categories', categoryRoute);
  app.use('/api/v1/comments', commentRoute);

  // error middleware should be the last middleware
  app.use(errorHandler);

  return app;
};

export default expressLoader;
