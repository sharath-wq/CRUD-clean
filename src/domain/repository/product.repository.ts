import { ProductRequestModel, ProductResponseModel } from '../entities/product';
import { ProductRepository } from '../interface/repository/product.repository';
import { ProductDataSource } from '../../data/interface/data-source/product-data-source';

export class ProductRepositoryImpl implements ProductRepository {
    ProductDataSource: ProductDataSource;
    constructor(ProductDataSource: ProductDataSource) {
        this.ProductDataSource = ProductDataSource;
    }

    async createProduct(product: ProductRequestModel): Promise<ProductResponseModel | null> {
        const result = await this.ProductDataSource.create(product);
        return result;
    }

    async deleteProduct(id: String): Promise<void> {
        await this.ProductDataSource.deleteOne(id);
    }

    async updateProduct(id: String, data: ProductRequestModel): Promise<ProductResponseModel | null> {
        const result = await this.ProductDataSource.updateOne(id, data);
        return result;
    }
    async getProducts(): Promise<ProductResponseModel[]> {
        const result = await this.ProductDataSource.getAll();
        return result;
    }
    async getProduct(id: String): Promise<ProductResponseModel | null> {
        const result = await this.ProductDataSource.getOne(id);
        return result;
    }
}
