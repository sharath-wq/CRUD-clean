import { ProductRequestModel, ProductResponseModel } from '../../entities/product';

export interface CreateProductUseCase {
    execute(Product: ProductRequestModel): Promise<ProductResponseModel | null>;
}
