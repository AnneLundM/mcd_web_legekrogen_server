import express from 'express';
import { getSubscribers } from '../../handlers/subscriber.handler.js';




const subscribersRouter = express.Router();

// GET -> ID / FETCH
subscribersRouter.get('/subscribers', async (req, res) => {

    let result = await getSubscribers(req.params.id);

    return res.status(200).send({ ...result });

})

export default subscribersRouter;

