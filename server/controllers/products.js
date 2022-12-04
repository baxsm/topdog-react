import { db } from "../database/db.js";

export const getFeaturedProducts = async (req, res) => {
    const query = "SELECT * FROM Products WHERE isFeatured=1";

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}