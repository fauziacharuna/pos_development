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
        if (!product)
            res.status(2).json({
                success: false,
                data: product,
                message: "Get product"
            })
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
        const product = await Product.update(req.body, {
            where: {
                id: req.params.id
            }

        });
        console.log(product)
        if (!product){
            res.json({
                "message": "Product Not found!"
            });
        } else {
            res.json({
                "message": "Product Updated"
            });
        }


    } catch (err) {
        console.log(err);
    }
}

// Delete product berdasarkan id
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        console.log(product)
        if (!product){
            res.json({
                "message": "Product not found"
            });
        } else {
            res.json({
                "message": "Product Deleted"
            });
        }

    } catch (err) {
        console.log(err);
    }
}
