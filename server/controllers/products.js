import { db } from "../database/db.js";

export const getFeaturedProducts = async (req, res) => {
    const query = "SELECT * FROM Products WHERE isFeatured=1";

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

export const getSpecificProduct = async (req, res) => {
    const productID = req.params.id;
    const query = `SELECT * FROM Products WHERE id=${productID}`;

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

export const getTopSellingProduct = async (req, res) => {
    const query = `SELECT * FROM Products WHERE popularity>70`;

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

export const getCategories = async (req, res) => {
    const query = `SELECT DISTINCT(category) FROM Products`;

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

export const exploreProduct = async (req, res) => {
    const keyword = req.params.keyword;
    const query = `SELECT * FROM Products WHERE category LIKE CONCAT('%', '${keyword}', '%') OR name LIKE CONCAT('%', '${keyword}', '%')`;

    db.query(query, [], (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}