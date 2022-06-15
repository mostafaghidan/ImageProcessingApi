"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var resizingRouter_1 = __importDefault(require("./routes/resizingRouter"));
var app = express();
var port = 4000;
app.use('/resizing', resizingRouter_1.default);
app.get('/', function (req, res) {
    res.send('Welcome,To use image resizer please add /resizing/?name=&height=&width= to the url');
});
app.listen(port, function () {
    console.log('server running');
});
exports.default = app;
