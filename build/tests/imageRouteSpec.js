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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Image Endpoint', () => {
    describe('Image does not exist', () => {
        it('get /images', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('/images');
            expect(res.status).toBe(400);
        }));
        it('get /images?imgName=test', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('/images?imgName=test');
            expect(res.status).toBe(400);
        }));
    });
    describe('get resized image', () => {
        it('get /images?imgName=santamonica&width=200&height=200', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('/images?imgName=santamonica&width=200&height=200');
            expect(res.status).toBe(200);
        }));
    });
    describe('check if width and height are numbers or Not', () => {
        it('get /images?imgName=santamonica&width=aaa&height=bbb', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request.get('/images?imgName=santamonica&width=aaa&height=bbb');
            expect(res.status).toBe(400);
        }));
    });
});
