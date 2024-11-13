import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
    res.json({
        health: "OK"
    });
})

export default healthRouter;