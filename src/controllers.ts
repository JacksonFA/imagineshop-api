import { Request, Response } from 'express'

export async function listUsersController(req: Request, res: Response) {
  const { name, age } = req.query
  console.log(name, age)
  return res.json({ message: 'Users list' })
}

export async function getUserController(req: Request, res: Response) {
  const { id } = req.params
  console.log(id)
  return res.json({ message: 'User' })
}

export async function createUserController(req: Request, res: Response) {
  const { name } = req.body
  console.log(name)
  return res.status(201).json({ message: 'User created' })
}
