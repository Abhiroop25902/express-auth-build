import express from "express";
import healthRouter from './health/healthRouter';
import signUpRouter from "./signUp/signUp";

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/health', healthRouter);
app.use('/signUp', signUpRouter);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})