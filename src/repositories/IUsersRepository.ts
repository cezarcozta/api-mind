import ICreateUserDTO from '../dtos/ICreateUserDTO';
import Users from '../database/entities/Users';

export default interface IUsersRepository {
  findAll(): Promise<Users[]>;

  findByEmail(email: string): Promise<Users | undefined>;

  store(data: ICreateUserDTO): Promise<Users>;

  update(user: Users): Promise<Users>;
}
