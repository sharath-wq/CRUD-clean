import server from './server';
import ProductRouter from './api/router/product.router';
import {
    CreateProduct,
    DeleteProduct,
    GetAllProducts,
    GetOneProduct,
    UpdateProduct,
} from './domain/use-case/product/index';
import { ProductRepositoryImpl } from './domain/repository/product.repository';
import { MongoDBProductDataSource } from './data/data-source/mongodb/mongodb-product-data-source';
import mongoose from 'mongoose';

async function getMongoDS() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cleen-product');
        console.log('MongoDB database connection established successfully 🚀');
        return new MongoDBProductDataSource();
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Rethrow the error for further handling or termination
    }
}

(async () => {
    const dataSource = await getMongoDS();

    const ProductMiddleware = ProductRouter(
        new GetAllProducts(new ProductRepositoryImpl(dataSource)),
        new CreateProduct(new ProductRepositoryImpl(dataSource)),
        new DeleteProduct(new ProductRepositoryImpl(dataSource)),
        new GetOneProduct(new ProductRepositoryImpl(dataSource)),
        new UpdateProduct(new ProductRepositoryImpl(dataSource))
    );

    server.use('/product', ProductMiddleware);
    server.listen(4000, () => console.log('Running on http://localhost:4000'));
})();
