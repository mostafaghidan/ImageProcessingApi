"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var imageIsExist = function (resizedImage) {
    if (fs_1.default.existsSync(path_1.default.resolve(__dirname, "../../thumbnail/".concat(resizedImage)))) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = imageIsExist;
