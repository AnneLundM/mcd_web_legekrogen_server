import express from 'express';
import { addSubscriber, deleteSubscriber, updateSubscriber, getSubscriber } from '../../handlers/subscriber.handler.js';
import auth from '../../middleware/auth.middleware.js';

const subscriberRouter = express.Router();

// GET -> ID / FETCH
subscriberRouter.get('/subscribe/:id', async (req, res) => {

    if(!req.params.id) {
        return res.status(200).send({ message: 'No ID provided', data: {}})
    }

    let result = await getSubscriber(req.params.id);

    return res.status(200).send({ ...result });

})

// POST / CREATE
subscriberRouter.post('/subscribe', async (req, res) => {
    
    const {name, email, message} = req.body;

    console.log(name, email, message)

    const model = {
        name,
        email,
        message
    }
    
    let result = await addSubscriber(model);

    return res.status(200).send({ ...result });
    
});

// DELETE -> ID
subscriberRouter.delete('/subscribe/:id', auth, async (req, res) => {

    if(!req.params.id) {
        return res.status(200).send({ message: 'No ID provided', data: {}})
    }

    let result = await deleteSubscriber(req.params.id);

    return res.status(200).send({ ...result });

})

// PUT / UPDATE
subscriberRouter.put('/subscribe', auth, async (req, res) => {

    const model = {
        ...req.body
    }

    let result = await updateSubscriber(model);

    return res.status(200).send({ ...result });
})

export default subscriberRouter;