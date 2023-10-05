import { Router } from "express";
import { getCategory } from "./category.controller";

const router = Router();

router.get('/categorys', getCategory);


export default router;