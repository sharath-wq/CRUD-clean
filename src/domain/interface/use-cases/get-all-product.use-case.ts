import { ProductResponseModel } from '../../entities/product';

export interface GetAllProductsUseCase {
    execute(): Promise<ProductResponseModel[]>;
}
