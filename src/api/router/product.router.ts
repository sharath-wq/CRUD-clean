import express, { Request, Response } from 'express';
import {
    CreateProductUseCase,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetOneProductUseCase,
    UpdateProductUseCase,
} from '../../domain/interface/use-cases/index';

export default function ProductRouter(
    GetAllProductsUseCase: GetAllProductsUseCase,
    CreateProductUseCase: CreateProductUseCase,
    DeleteProductUseCase: DeleteProductUseCase,
    GetOneProductUseCase: GetOneProductUseCase,
    UpdateProductUseCase: UpdateProductUseCase
) {
    const router = express.Router();

    router.get('/', async (req: Request, res: Response) => {
        try {
            const products = await GetAllProductsUseCase.execute();
            res.send(products);
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' });
        }
    });

    router.post('/', async (req: Request, res: Response) => {
        try {
            const product = await CreateProductUseCase.execute(req.body);
            res.status(201).send(product);
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    });

    router.get('/:id', async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const product = await GetOneProductUseCase.execute(id);
            res.send(product);
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    });

    router.delete('/:id', async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await DeleteProductUseCase.execute(id);
            res.send({ message: 'Product deleted' });
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    });

    router.patch('/:id', async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updateProduct = await UpdateProductUseCase.execute(id, req.body);
            console.log(updateProduct);

            res.status(200).send(updateProduct);
        } catch (error) {
            res.status(500).send('Something went wrong');
        }
    });

    return router;
}
