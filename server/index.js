import express from "express";
import productRoutes from './routes/products.js'
import cors from "cors"
import extraRoutes from "./routes/extra.js";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/products", productRoutes)
app.use("/api/extra", extraRoutes)

app.get('/', (req, res) => {
    res.send('TopDog Backend @BAXSM')
})

const PORT = '8800';
app.listen(PORT, () => {
    console.log(`Server start on PORT: ${PORT}`);
})