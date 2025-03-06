import express from 'express'
import { addProduct, deleteProduct, updateProduct } from '../../handlers/products.handler.js';

import multer from 'multer';
import auth from '../../middleware/auth.middleware.js';
import { productsStorage } from '../../db/mcd/misc/mStorage.js';

const productRoute = express.Router();
const upload = multer({ storage: productsStorage });

// POST / CREATE
productRoute.post('/product', auth, upload.single('file'), async (req, res) => {
    
    const model = {
        ...req.body
    }

    if(req.file) {

        model.image = process.env.SERVER_HOST + '/products/' + req.file.filename

    }

    const result = await addProduct(model);

    return res.status(200).send({ ...result });
    
});

// PUT / UPDATE
productRoute.put('/product', auth, upload.single('file'), async (req, res) => {
    
    const model = {
        ...req.body
    }

    if(req.file) {
        model.image = process.env.SERVER_HOST + '/products/' + req.file.filename
    }

    const result = await updateProduct(model);

    return res.status(200).send({ ...result });
    
});



// DELETE -> ID
productRoute.delete('/product/:id', auth, async (req, res) => {

    if(!req.params.id) {
        return res.status(200).send({ message: 'No ID provided', data: {}})
    }

    let result = await deleteProduct(req.params.id);

    return res.status(200).send({ ...result });

})

export default productRoute;