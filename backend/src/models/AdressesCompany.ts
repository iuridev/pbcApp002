import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Company from './Company';

@Entity('tbadressescompany')
class AdressesCompany {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column('integer')
  number: number;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column('integer')
  cep: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  // Forrekey
  @Column()
  company_fk_id: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_fk_id' })
  company: Company;
}

export default AdressesCompany;
