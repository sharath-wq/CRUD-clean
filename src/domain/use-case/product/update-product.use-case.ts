import { ProductRequestModel, ProductResponseModel } from '../../entities/product';
import { ProductRepository } from '../../interface/repository/product.repository';
import { UpdateProductUseCase } from '../../interface/use-cases';

export class UpdateProduct implements UpdateProductUseCase {
    ProductRepository: ProductRepository;
    constructor(ProductRepository: ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    async execute(id: string, data: ProductRequestModel): Promise<ProductResponseModel | null> {
        const updatedProduct = await this.ProductRepository.updateProduct(id, data);
        return updatedProduct;
    }
}
