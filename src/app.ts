import express from "express";
import healthRouter from './health/healthRouter';

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/health', healthRouter);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})