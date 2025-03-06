import express from 'express';
import { getProducts } from '../../handlers/products.handler.js';


const productsRoute = express.Router();

// Get
productsRoute.get('/products', async (req, res) => {

    let result = await getProducts();

    return res.status(200).send({ ...result });
    
});

export default productsRoute;