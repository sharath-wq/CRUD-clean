import express from 'express';
import { ProductController } from '../controllers/product.controller';
import {
    CreateProductUseCase,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetOneProductUseCase,
    UpdateProductUseCase,
} from '../../domain/interface/use-cases/index';

export default function ProductRouter(
    getAllProductsUseCase: GetAllProductsUseCase,
    createProductUseCase: CreateProductUseCase,
    deleteProductUseCase: DeleteProductUseCase,
    getOneProductUseCase: GetOneProductUseCase,
    updateProductUseCase: UpdateProductUseCase
) {
    const router = express.Router();
    const productController = new ProductController(
        getAllProductsUseCase,
        createProductUseCase,
        getOneProductUseCase,
        deleteProductUseCase,
        updateProductUseCase
    );

    router.get('/', async (req, res) => productController.getAllProducts(req, res));
    router.post('/', async (req, res) => productController.createProduct(req, res));
    router.get('/:id', async (req, res) => productController.getOneProduct(req, res));
    router.delete('/:id', async (req, res) => productController.deleteProduct(req, res));
    router.patch('/:id', async (req, res) => productController.updateProduct(req, res));

    return router;
}
