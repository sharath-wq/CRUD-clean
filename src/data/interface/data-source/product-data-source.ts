import { ProductRequestModel, ProductResponseModel } from '../../../domain/entities/product';

export interface ProductDataSource {
    create(Product: ProductRequestModel): Promise<ProductResponseModel | null>;
    getAll(): Promise<ProductResponseModel[]>;
    deleteOne(id: String): Promise<void>;
    updateOne(id: String, Product: ProductRequestModel): Promise<ProductResponseModel | null>;
    getOne(id: String): Promise<ProductResponseModel | null>;
}
