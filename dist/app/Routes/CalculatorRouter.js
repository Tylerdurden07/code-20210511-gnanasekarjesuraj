"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CalculatorCtrl_1 = __importDefault(require("../Controller/CalculatorCtrl"));
const router = express_1.Router();
router.post("/bmi", CalculatorCtrl_1.default.calculateBMI);
const baseRouter = express_1.Router();
baseRouter.use("/app-server/api/v1", router);
exports.default = baseRouter;
//# sourceMappingURL=CalculatorRouter.js.map