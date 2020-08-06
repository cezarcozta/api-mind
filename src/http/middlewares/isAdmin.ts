import { Request, Response, NextFunction } from 'express';

// import roleConfig from '../../config/role';

export default function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // se o user.role === 999 entao
  // retorna admin
  // se nao se 1
  // return user
  // se nao throw new error
  return next();
}
