import UsersTokens from '../database/entities/UsersTokens';

export default interface IUSerTokenRepository {
  generate(user_id: string): Promise<UsersTokens>;

  findByToken(token: string): Promise<UsersTokens | undefined>;
}
