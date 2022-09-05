import { Express, json, urlencoded } from 'express';

import userRoute from '../routes/userRoute';
import postRoute from '../routes/postRoute';
import categoryRoute from '../routes/categoryRoute';

import { errorHandler } from '../errors/errorHandler';

interface expressInterface {
  app: Express;
}

const expressLoader = ({ app }: expressInterface) => {
  // Body parser, reading data from body into req.body
  app.use(json({ limit: '10kb' }));
  app.use(urlencoded({ extended: true, limit: '10kb' }));

  // adding routes as middleware here
  app.get('/', (req, res) => res.send('hello docker104'));
  // app.use('/api/v1/conversation', conversationRoute);
  app.use('/api/v1/user', userRoute);
  app.use('/api/v1/post', postRoute);
  app.use('/api/v1/categories', categoryRoute);

  // error middleware should be the last middleware
  app.use(errorHandler);

  return app;
};

export default expressLoader;
