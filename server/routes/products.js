import express from "express"

import {getFeaturedProducts} from '../controllers/products.js'

const router = express.Router()

router.get("/featured", getFeaturedProducts);

export default router