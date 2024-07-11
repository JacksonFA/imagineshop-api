import express, {Request, Response, NextFunction} from 'express'

// export const authMiddleware = express()
//   .use((req, res, next) => {
//     const auth = req.headers.authorization

//     if (auth === '123456') return next()

//     return res.status(403).json({ error: 'Forbidden' })
//   })

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization

  if (auth === '123456') return next()

  return res.status(403).json({ error: 'Forbidden' })
}
