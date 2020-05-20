import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tbusers')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  creat_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default User;
