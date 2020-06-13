import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateProductService from '../services/CreateProductService';
import ProductsRepository from '../repositories/ProductsRepository';

const productRouter = Router();
productRouter.use(ensureAuthenticated);

productRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      price,
      description,
      weight,
      provider,
      amount,
      avatar,
    } = request.body;
    const createProduct = new CreateProductService();
    const product = await createProduct.execute({
      name,
      price,
      description,
      weight,
      provider,
      amount,
      avatar,
      companyfkid: request.company.id,
    });
    return response.json(product);
  } catch (error) {
    return response.json(error);
  }
});

productRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find({
    where: { companyfkid: request.company.id },
  });
  return response.json(products);
});
export default productRouter;
