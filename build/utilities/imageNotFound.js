"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var imageNameNotFound = function (filename) {
    if (fs_1.default.existsSync(path_1.default.resolve(__dirname, "../../public/".concat(filename, ".jpg")))) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = imageNameNotFound;
