/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  cpf: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  // @Exclude()
  password: string;

  // @Column('varchar')
  // avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @Expose({ name: 'avatar_url' })
  // getAvatarUrl(): string | null {
  //   if (!this.avatar) {
  //     return null;
  //   }
  //
  //   return `${process.env.APP_API_URL}/files/${this.avatar}`;
  // }
}

export default Users;
