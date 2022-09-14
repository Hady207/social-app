import expressLoader from './express';

const loaders = async (app: any) => {
  await expressLoader(app);
  console.log('Express Initialized');

  // ... more loaders can be here

  // ... Initialize agenda
  // ... or Redis, or whatever you want
};

export default loaders;
