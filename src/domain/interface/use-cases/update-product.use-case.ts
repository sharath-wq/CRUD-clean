import { ProductRequestModel, ProductResponseModel } from '../../entities/product';

export interface UpdateProductUseCase {
    execute(id: string, data: ProductRequestModel): Promise<ProductResponseModel | null>;
}
