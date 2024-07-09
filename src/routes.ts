import express from 'express'
import { createUserController, getUserController, listUsersController } from 'controllers'

export const routes = express()
  .get('/', (_, res) => res.json({ message: 'Hello World' }))
  .get('/users/:id', getUserController)
  .get('/users', listUsersController)
  .post('/users', createUserController)
