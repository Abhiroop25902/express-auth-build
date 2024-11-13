"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthRouter = express_1.default.Router();
healthRouter.get('/', (req, res) => {
    res.status(200)
        .json({
        health: "OK"
    });
});
exports.default = healthRouter;
//# sourceMappingURL=healthRouter.js.map