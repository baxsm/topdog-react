import express from "express"

import { getBannerData } from "../controllers/extra.js"


const router = express.Router()

router.get("/getBannerData", getBannerData);

export default router