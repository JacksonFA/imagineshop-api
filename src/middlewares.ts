import express from 'express'

export const authMiddleware = express()
  .use((req, res, next) => {
    const auth = req.headers.authorization

    if (auth === '123456') return next()

    return res.status(401).json({ error: 'Unauthorized' })
  })