import { ProductResponseModel } from '../../entities/product';
import { ProductRepository } from '../../interface/repository/product.repository';
import { GetOneProductUseCase } from '../../interface/use-cases';

export class GetOneProduct implements GetOneProductUseCase {
    ProductRepository: ProductRepository;
    constructor(ProductRepository: ProductRepository) {
        this.ProductRepository = ProductRepository;
    }
    async execute(id: string): Promise<ProductResponseModel | null> {
        const product = await this.ProductRepository.getProduct(id);
        return product;
    }
}
