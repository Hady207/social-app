import express from 'express';
import request from 'supertest';
import expressLoader from '../../loaders/express';
import { CategoriesController } from '#controllers/category.controller';

const app = expressLoader(express());

test('testing category get method', async () => {
  const res = await request(app).get('/api/v1/categories');

  console.log(res);
});
