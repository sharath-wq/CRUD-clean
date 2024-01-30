import { ProductRepository } from '../../interface/repository/product.repository';
import { DeleteProductUseCase } from '../../interface/use-cases';

export class DeleteProduct implements DeleteProductUseCase {
    ProductRepository: ProductRepository;
    constructor(ProductRepository: ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    async execute(id: string): Promise<void> {
        await this.ProductRepository.deleteProduct(id);
    }
}
