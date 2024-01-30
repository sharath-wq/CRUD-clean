import { ProductRequestModel, ProductResponseModel } from '../../entities/product';
import { ProductRepository } from '../../interface/repository/product.repository';
import { CreateProductUseCase } from '../../interface/use-cases';

export class CreateProduct implements CreateProductUseCase {
    ProductRepository: ProductRepository;
    constructor(ProductRepository: ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    async execute(Product: ProductRequestModel): Promise<ProductResponseModel | null> {
        const product = await this.ProductRepository.createProduct(Product);
        return product;
    }
}
