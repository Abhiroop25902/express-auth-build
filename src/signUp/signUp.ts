import { json, Router } from "express";

const signUpRouter = Router();
signUpRouter.use(json());

signUpRouter.post('/', (req, res) => {
    console.log(req.body);

    res.status(200).send();
})

export default signUpRouter;