import { ProductRequestModel, ProductResponseModel } from '../../entities/product';

export interface ProductRepository {
    createProduct(product: ProductRequestModel): Promise<ProductResponseModel | null>;
    deleteProduct(id: String): Promise<void>;
    updateProduct(id: String, data: ProductRequestModel): Promise<ProductResponseModel | null>;
    getProducts(): Promise<ProductResponseModel[]>;
    getProduct(id: String): Promise<ProductResponseModel | null>;
}
