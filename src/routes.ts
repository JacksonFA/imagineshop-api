import express from 'express'
import { createUserController, getUserController, listUsersController, loginUserController } from 'controllers'
import { authMiddleware } from 'middlewares'

export const routes = express()
  .get('/', (_, res) => res.json({ message: 'Hello World' }))
  .get('/users/:id', getUserController)
  .get('/users', authMiddleware, listUsersController)
  .post('/users', authMiddleware, createUserController)
  .post('/login', loginUserController)
