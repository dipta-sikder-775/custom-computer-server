import { Router } from "express";
import productRouter from "../module/product/product.index";
import categoryRouter from "../module/category/category.index";


const router = Router();

router.use('/product', productRouter)
router.use('/category', categoryRouter)


export default router;