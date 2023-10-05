import { NextFunction, Request, Response } from "express";
import { Product } from "./product.model";
import { Category } from "../category/category.model";

export const getRandomProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.aggregate([
            { $sample: { size: 6 } }
        ]);
        res.status(200).send({
            success: true,
            data: products
        })
    }
    catch (err) {
        next(err)
    }
}
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
        res.status(200).send({
            success: true,
            data: products
        })
    }
    catch (err) {
        next(err)
    }
}
export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
           return res.status(400).send({
            success: false,
            message: "Product Not found"
        }) 
        }
        res.status(200).send({
            success: true,
            data: product
        })
    }
    catch (err) {
        next(err)
    }
}

export const getProductByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const findCategory = await Category.findById(id);
        if(!findCategory){
            return res.status(400).send({
                success: false,
                message: "Category Not found"
            }) 
        }
        const product = await Product.find({category: findCategory.name});
        if(!product.length){
           return res.status(400).send({
            success: false,
            message: "Category Product Not found"
        }) 
        }
        res.status(200).send({
            success: true,
            data: product
        })
    }
    catch (err) {
        next(err)
    }
}