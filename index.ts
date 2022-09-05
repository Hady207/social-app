import express, { Express } from 'express';
import { config as DotEnvConfig } from 'dotenv';
import socketIo from './src/socket';
import loaders from './src/loaders';

DotEnvConfig();

const startServer = async () => {
  const app: Express = express();
  await loaders(app);

  const server = app.listen(process.env.PORT, () => {
    console.log(`Your server is running on port ${process.env.PORT} !`);
  });
  // socket IO Setup
  socketIo(server);
};

startServer();
