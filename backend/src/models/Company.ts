import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_companies')
class Company{
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column('integer')
  tel: number;

  @Column()
  email: string;

  @Column('timestamp with local time zone')
  date: Date;
}
export default Company;