import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = createUser.execute({ name, cpf, email, password });

    return response.json(user);
  }
}

export default UsersController;
