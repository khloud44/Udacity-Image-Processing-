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
const path_1 = __importDefault(require("path"));
const imageController_1 = require("../controller/imageController");
describe('Image Controller', () => {
    it('Check if Image is Existing', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgName = 'encenadaport';
        expect(yield (0, imageController_1.checkImageExists)(imgName)).toBe(true);
    }));
    it('Check if Image Thumb is Existing', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgName = 'encenadaport';
        const imgWidth = '100';
        const imgHeight = '100';
        expect(yield (0, imageController_1.checkThumbExists)(imgName, imgWidth, imgHeight)).toBe(false);
    }));
    it('resizes image', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagePath = path_1.default.join(__dirname, '../../assets/images/palmtunnel.jpg');
        const rezizedImagePath = path_1.default.join(__dirname, '../../assets/thumb/palmtunnel-200-200.jpg');
        const resizedImage = yield (0, imageController_1.resizeImage)(imagePath, 200, 200, rezizedImagePath);
        expect(resizedImage).toBeFalsy();
    }));
});
