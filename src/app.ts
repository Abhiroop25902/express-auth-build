import express from "express";

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})