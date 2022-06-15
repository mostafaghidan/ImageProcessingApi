"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mainFunction_1 = __importDefault(require("../utilities/mainFunction"));
var express_1 = __importDefault(require("express"));
var routerResize = express_1.default.Router();
routerResize.get('/', mainFunction_1.default);
exports.default = routerResize;
