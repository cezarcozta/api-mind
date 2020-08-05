import { container } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import UsersRepository from '../database/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
