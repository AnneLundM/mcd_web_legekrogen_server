import express from 'express';
import auth from '../../middleware/auth.middleware.js';
import { getQandas } from '../../handlers/qanda.handler.js';


const qandasRouter = express.Router();

// GET -> ID / FETCH
qandasRouter.get('/qandas', auth, async (req, res) => {

    let result = await getQandas();

    return res.status(200).send({ ...result });

})

export default qandasRouter;

