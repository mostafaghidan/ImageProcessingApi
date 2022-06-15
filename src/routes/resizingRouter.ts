import resizing from '../utilities/mainFunction';
import express from 'express';
const routerResize = express.Router();
routerResize.get('/', resizing);
export default routerResize;
