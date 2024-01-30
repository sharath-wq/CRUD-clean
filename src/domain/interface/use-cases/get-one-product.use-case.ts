import { ProductResponseModel } from '../../entities/product';

export interface GetOneProductUseCase {
    execute(id: string): Promise<ProductResponseModel | null>;
}
