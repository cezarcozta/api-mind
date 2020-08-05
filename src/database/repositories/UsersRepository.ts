import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '../../repositories/IUsersRepository';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

import Users from '../entities/Users';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async findAll(): Promise<Users[]> {
    const user = await this.ormRepository.find();

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async store(data: ICreateUserDTO): Promise<Users> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async update(user: Users): Promise<Users> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
