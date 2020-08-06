import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import authConfig from '../config/auth';

import Users from '../database/entities/Users';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  email?: string;
  cpf?: string;
  password: string;
}

interface IResponse {
  user: Users;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, cpf, password }: IRequest): Promise<IResponse> {
    if (email) {
      const user = await this.usersRepository.findByEmail(email);

      if (!user) {
        throw new Error('Incorrect email(CPF)/password combination');
      }

      const passwordMatched = await this.hashProvider.compareHash(
        password,
        user.password,
      );

      if (!passwordMatched) {
        throw new Error('Incorrect email(CPF)/password combination');
      }

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn,
      });

      return {
        user,
        token,
      };
    }

    if (cpf) {
      const user = await this.usersRepository.findByCPF(cpf);

      if (!user) {
        throw new Error('Incorrect email(CPF)/password combination');
      }

      const passwordMatched = await this.hashProvider.compareHash(
        password,
        user.password,
      );

      if (!passwordMatched) {
        throw new Error('Incorrect email(CPF)/password combination');
      }

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn,
      });

      return {
        user,
        token,
      };
    }
    throw new Error('user not found');
  }
}

export default CreateSessionService;
