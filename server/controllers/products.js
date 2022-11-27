import prisma from '../database/prisma.js'

export const getFeaturedProducts = async (req, res) => {
    const data = await prisma.products.findMany({
        
    });
    console.log(data)
    return res.status(200).json(data)
}