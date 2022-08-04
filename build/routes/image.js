"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageController_1 = require("../controller/imageController");
const checkUrl_1 = __importDefault(require("../middleware/checkUrl"));
const image = express_1.default.Router();
image.get('/', checkUrl_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isImageExists = yield (0, imageController_1.checkImageExists)(req.query.imgName);
    const isThumbExists = yield (0, imageController_1.checkThumbExists)(req.query.imgName, req.query.width, req.query.height);
    if (isImageExists) {
        if (!isThumbExists) {
            try {
                yield (0, imageController_1.resizeImage)(path_1.default.resolve(imageController_1.fullImagePath, `${req.query.imgName}.jpg`), Number(req.query.width), Number(req.query.height), path_1.default.resolve(imageController_1.thumbImagePath, `${req.query.imgName}-${req.query.width}-${req.query.height}.jpg`));
                res.status(200).sendFile(path_1.default.resolve(imageController_1.thumbImagePath, `${req.query.imgName}-${req.query.width}-${req.query.height}.jpg`));
            }
            catch (_a) {
                res.status(400).send('Error while image Proccessing');
            }
        }
        else {
            res.status(200).sendFile(path_1.default.resolve(imageController_1.thumbImagePath, `${req.query.imgName}-${req.query.width}-${req.query.height}.jpg`));
        }
    }
    else {
        res.status(400).send('Invalid Image Name');
    }
}));
exports.default = image;
