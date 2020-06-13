import { getCustomRepository } from 'typeorm';
import ProductCompany from '../models/ProductsCompany';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  name: string;
  price: number;
  description: string;
  weight: string;
  provider: string;
  amount: number;
  avatar: string;
  companyfkid: string;
}

class CreateProductService {
  public async execute({
    name,
    price,
    description,
    weight,
    provider,
    amount,
    avatar,
    companyfkid,
  }: Request): Promise<ProductCompany> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const product = productsRepository.create({
      name,
      price,
      description,
      weight,
      provider,
      amount,
      avatar,
      companyfkid,
    });
    await productsRepository.save(product);
    return product;
  }
}
export default CreateProductService;
