"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wrongDimensions = function (height, width) {
    if ((height || width) <= 0 ||
        !Number.isInteger(width) ||
        !Number.isInteger(height) ||
        isNaN(height || width) ||
        !height ||
        !width) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = wrongDimensions;
