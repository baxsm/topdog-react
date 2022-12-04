import prisma from '../database/prisma.js'

export const getBannerData = async (req, res) => {
    const data = await prisma.Banner.findMany({});
    return res.status(200).json(data)
}