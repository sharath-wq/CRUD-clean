import { Request, Response } from 'express';
import {
    CreateProductUseCase,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetOneProductUseCase,
    UpdateProductUseCase,
} from '../../domain/interface/use-cases/index';
import { ProductRequestModel, ProductResponseModel } from '../../domain/entities/product';

export class ProductController {
    getAllProductsUseCase: GetAllProductsUseCase;
    createProductUseCase: CreateProductUseCase;
    getOneProductUseCase: GetOneProductUseCase;
    deleteProductUseCase: DeleteProductUseCase;
    updateProductUseCase: UpdateProductUseCase;

    constructor(
        getAllProductsUseCase: GetAllProductsUseCase,
        createProductUseCase: CreateProductUseCase,
        getOneProductUseCase: GetOneProductUseCase,
        deleteProductUseCase: DeleteProductUseCase,
        updateProductUseCase: UpdateProductUseCase
    ) {
        this.getAllProductsUseCase = getAllProductsUseCase;
        this.createProductUseCase = createProductUseCase;
        this.getOneProductUseCase = getOneProductUseCase;
        this.deleteProductUseCase = deleteProductUseCase;
        this.updateProductUseCase = updateProductUseCase;
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await this.getAllProductsUseCase.execute();
            res.send(products);
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' });
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const product = await this.createProductUseCase.execute(req.body as ProductRequestModel);
            res.status(201).send(product);
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    }

    async getOneProduct(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const product = await this.getOneProductUseCase.execute(id);
            res.send(product);
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await this.deleteProductUseCase.execute(id);
            res.send({ message: 'Product deleted' });
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updateProduct = await this.updateProductUseCase.execute(id, req.body as ProductRequestModel);
            console.log(updateProduct);
            res.status(200).send(updateProduct);
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    }
}
