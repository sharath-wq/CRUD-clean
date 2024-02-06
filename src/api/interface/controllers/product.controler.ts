import { Request, Response } from 'express';
import { ProductRequestModel, ProductResponseModel } from '../../../domain/entities/product';

export interface ProductControllerInterface {
    getAllProducts(req: Request, res: Response): Promise<void>;
    createProduct(req: Request, res: Response): Promise<void>;
    getOneProduct(req: Request, res: Response): Promise<void>;
    deleteProduct(req: Request, res: Response): Promise<void>;
    updateProduct(req: Request, res: Response): Promise<void>;
}
