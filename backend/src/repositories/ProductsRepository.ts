// repositorios tem a responsabilidade de trabalhar e manipular os dados
import { EntityRepository, Repository } from 'typeorm';
import ProductCompany from '../models/ProductsCompany';

@EntityRepository(ProductCompany)
class ProductsRepository extends Repository<ProductCompany> {
  // in future methods for filters
}

export default ProductsRepository;
