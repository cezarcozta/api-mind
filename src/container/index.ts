import { container } from 'tsyringe';

import '../providers';

import UsersTokensRepository from '../database/repositories/UsersTokensRepository';
import IUsersRepository from '../repositories/IUsersRepository';

import UsersRepository from '../database/repositories/UsersRepository';
import IUsersTokensRepository from '../repositories/IUsersTokensRepository';

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
