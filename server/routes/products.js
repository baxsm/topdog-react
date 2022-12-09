import express from "express"

import {getFeaturedProducts, getSpecificProduct, getTopSellingProduct} from '../controllers/products.js'

const router = express.Router()

router.get("/featured", getFeaturedProducts);
router.get("/searchById/:id", getSpecificProduct);
router.get("/topSelling/", getTopSellingProduct);

export default router