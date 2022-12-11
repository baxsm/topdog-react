import express from "express"

import {getFeaturedProducts, getSpecificProduct, getTopSellingProduct, getCategories, exploreProduct} from '../controllers/products.js'

const router = express.Router()

router.get("/featured", getFeaturedProducts);
router.get("/searchById/:id", getSpecificProduct);
router.get("/topSelling/", getTopSellingProduct);
router.get("/getCategories/", getCategories);
router.get("/exploreProduct/:keyword", exploreProduct);

export default router