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
exports.resizeImage = exports.checkThumbExists = exports.checkImageExists = exports.thumbImagePath = exports.fullImagePath = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fullImagePath = path_1.default.join(__dirname, '../../assets/images');
exports.fullImagePath = fullImagePath;
const thumbImagePath = path_1.default.join(__dirname, '../../assets/thumb');
exports.thumbImagePath = thumbImagePath;
// Check if the image is existing or Not
const checkImageExists = (imgName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.access(`${fullImagePath}/${imgName}.jpg`);
        return true;
    }
    catch (_a) {
        return false;
    }
});
exports.checkImageExists = checkImageExists;
// Check if the image already resezed or Not
const checkThumbExists = (imgName, imgWidth, imgHeight) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.access(`${thumbImagePath}/${imgName}-${imgWidth}-${imgHeight}.jpg`);
        return true;
    }
    catch (_b) {
        return false;
    }
});
exports.checkThumbExists = checkThumbExists;
// Sharp Function to resize the image
const resizeImage = (inputPath, width, height, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)(inputPath)
            .resize(width, height)
            .toFormat('jpg')
            .toFile(outputPath);
        return null;
    }
    catch (_c) {
        return "Can't resize this image, Please try again...";
    }
});
exports.resizeImage = resizeImage;
