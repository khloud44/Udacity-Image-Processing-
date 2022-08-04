"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const portNum = 3000;
app.listen(portNum, () => {
    console.log(`Server is Running at Port ${portNum} ...`);
});
app.use('/images', index_1.default);
app.use('*', (req, res) => {
    res.send("This Route Doen't Exist :(...");
});
exports.default = app;
