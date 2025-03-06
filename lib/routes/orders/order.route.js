import express from 'express';
import multer from 'multer';
import auth from '../../middleware/auth.middleware.js';

import { addOrder } from '../../handlers/order.handler.js';
import { productsStorage } from '../../db/mcd/misc/mStorage.js';


const orderRoute = express.Router();
const upload = multer({ storage: productsStorage });

// POST / CREATE
orderRoute.post('/order', auth, upload.single('file'), async (req, res) => {
    
    const model = {
        ...req.body
    }

    const result = await addOrder(model);

    return res.status(200).send({ ...result });
    
});

export default orderRoute;

