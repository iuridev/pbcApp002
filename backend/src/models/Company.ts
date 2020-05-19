// models são o escorpo de nossa tabela do BD.
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbcompanies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column('integer')
  tel: number;
}

export default Company;
