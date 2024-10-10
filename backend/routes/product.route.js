// @ts-nocheck
import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';
import Product from "../models/product.model.js"

const router = express.Router();

// Change the route method from GET to POST
router.post("/", createProduct);
// Get all products
router.get("/", getProducts);
router.put("/:id",updateProduct )
router.delete("/:id", deleteProduct )

export default router;