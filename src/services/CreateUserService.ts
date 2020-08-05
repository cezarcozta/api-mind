import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import Users from '../database/entities/Users';

interface IRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    cpf,
    email,
    password,
  }: IRequest): Promise<Users> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('Email address already used.');
    }

    const user = this.usersRepository.store({ name, cpf, email, password });

    return user;
  }
}

export default CreateUserService;
