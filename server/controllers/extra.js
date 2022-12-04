import { db } from "../database/db.js";

export const getBannerData = (req, res) => {
    const query = "SELECT * FROM banner";

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}