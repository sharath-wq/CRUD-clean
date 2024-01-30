import { ProductResponseModel } from '../../entities/product';
import { ProductRepository } from '../../interface/repository/product.repository';
import { GetAllProductsUseCase } from '../../interface/use-cases';

export class GetAllProducts implements GetAllProductsUseCase {
    ProductRepository: ProductRepository;
    constructor(ProductRepository: ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    async execute(): Promise<ProductResponseModel[]> {
        const products = await this.ProductRepository.getProducts();
        return products;
    }
}
