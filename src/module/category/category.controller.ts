import { NextFunction, Request, Response } from "express";
import { Category } from "./category.model";

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Category.find();
        res.status(200).send({
            success: true,
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}