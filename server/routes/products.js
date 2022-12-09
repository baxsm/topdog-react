import express from "express"

import {getFeaturedProducts, getSpecificProduct} from '../controllers/products.js'

const router = express.Router()

router.get("/featured", getFeaturedProducts);
router.get("/searchById/:id", getSpecificProduct);

export default router