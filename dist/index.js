"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CalculatorRouter_1 = __importDefault(require("./app/Routes/CalculatorRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
let app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(CalculatorRouter_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server is up and running on ${PORT}`));
//# sourceMappingURL=index.js.map