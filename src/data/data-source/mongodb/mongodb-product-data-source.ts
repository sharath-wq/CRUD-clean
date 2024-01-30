import { ProductRequestModel, ProductResponseModel } from '../../../domain/entities/product';
import { ProductDataSource } from '../../interface/data-source/product-data-source';
import productModel from './schema/product.schema';

export class MongoDBProductDataSource implements ProductDataSource {
    async updateOne(id: string, Product: ProductRequestModel): Promise<ProductResponseModel | null> {
        const result = await productModel.findByIdAndUpdate(id, {
            name: Product.name,
            price: Product.price,
        });

        if (result) {
            return {
                _id: result.id,
                name: result.name,
                price: result.price,
            };
        } else {
            return null;
        }
    }
    async create(Product: ProductRequestModel): Promise<ProductResponseModel | null> {
        try {
            const result = await productModel.create(Product);
            if (result) {
                return {
                    _id: result.id,
                    name: result.name,
                    price: result.price,
                };
            } else {
                return null;
            }
        } catch (error: any) {
            console.error('Error creating product:', error);

            // Log and handle validation errors
            if (error.errors) {
                console.error('Validation errors:', error.errors);
            }

            return null;
        }
    }
    async getAll(): Promise<ProductResponseModel[] | []> {
        const result = await productModel.find();

        return result.map((item) => ({
            _id: item.id,
            name: item.name,
            price: item.price,
        }));
    }

    async deleteOne(id: string): Promise<void> {
        await productModel.findByIdAndDelete(id);
    }

    async getOne(id: string): Promise<ProductResponseModel | null> {
        const result = await productModel.findById(id);

        if (result) {
            return {
                _id: result.id,
                name: result.name,
                price: result.price,
            };
        } else {
            return null;
        }
    }
}
