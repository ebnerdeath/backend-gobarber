import User from './app/models/User';

const { Router } = require('express');

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Ebner Silva',
    email: 'ebner.suporte@hotmail.com',
    password_hash: '123123',
  });

  return res.json(user);
});

export default routes;
