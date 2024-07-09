import express, { json } from 'express'
import { authMiddleware } from 'middlewares'
import { routes } from 'routes'

express()
  .use(json())
  .use(authMiddleware)
  .use(routes)
  .listen(3333, () => console.log('Server is running on :3333'))
