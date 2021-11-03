// Import model Product
import Product from "../models/Product.js";

// Get semua product
export const getProducts = async (req, res) => {
    console.log(res.data);
    try {
        const product = await Product.findAll();
        res.status(200).json({
            success: true,
            data: product,
            message: "Get All Products"
        })

    } catch (err) {
        console.log(err);
    }
}

// Get product berdasarkan id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            success: true,
            data: product,
            message: "Get product"
        })
    } catch (err) {
        console.log(err);
    }
}

// Create product baru
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product berdasarkan id
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete product berdasarkan id
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
