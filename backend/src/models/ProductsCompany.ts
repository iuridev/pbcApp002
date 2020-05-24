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

@Entity('tbproducts')
class ProductsCompany {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('integer')
  price: number;

  @Column()
  description: string;

  @Column()
  weight: string;

  @Column()
  provider: string;

  @Column()
  amount: string;

  @Column()
  avatar: string;

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

export default ProductsCompany;
