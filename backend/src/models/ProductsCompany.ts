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
  amount: number;

  @Column()
  avatar: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  // Forrekey
  @Column()
  companyfkid: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'companyfkid' })
  company: Company;
}

export default ProductsCompany;
