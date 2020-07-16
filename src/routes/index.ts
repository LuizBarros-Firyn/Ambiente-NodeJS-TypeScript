import { Router } from 'express';

const routes = Router();

routes.get('/users', (request, response) =>
  response.json({ message: 'Start from here!' })
);

export default routes;
