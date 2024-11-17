"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUpRouter = (0, express_1.Router)();
signUpRouter.use((0, express_1.json)());
signUpRouter.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send();
});
exports.default = signUpRouter;
//# sourceMappingURL=signUp.js.map