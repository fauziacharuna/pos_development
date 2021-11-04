// Import express
import express from "express";
// Import Controller Product
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Product.js";

//Import Controller Item
import {getItems, getItemById, updateItem, deleteItem, createItem} from "../controllers/Item.js";

// Init express router
const router = express.Router();

// Route get semua product
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create product baru
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);

router.get('/items', getItems);
router.get('/items/:id', getItemById);
router.post('/items', createItem);
router.delete('/items/:id', deleteItem);

// export router
export default router;
