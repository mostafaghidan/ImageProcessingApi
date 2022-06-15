import express from 'express';
import path from 'path';
import sharp from 'sharp';
import imageIsExist from './imageIsExist';
import imageNameNotFound from './imageNotFound';
import wrongDimensions from './wrongInputs';
const mainFunction = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const name = req.query.name as string;
  const height = req.query.height as unknown as number;
  const width = req.query.width as unknown as number;
  const input = path.resolve(__dirname, '..', `../public/${name}.jpg`);
  const outputFolder = path.resolve(__dirname, '..', '../thumbnail/');
  const outputFull = `${outputFolder}/${name}${height}${width}.jpg`;
  const outputName = `${name}${height}${width}.jpg`;
  try {
    if (imageIsExist(outputName)) {
      res.sendFile(outputFull);
      console.log('image is already exist');
    } else if (!imageNameNotFound(name)) {
      res.status(404).send('Your input file name is not exist');
      console.log('input file not found');
    } else if (wrongDimensions(height, width)) {
      res
        .status(404)
        .send(
          'Wrong inputs Please add positive integers for height and width queries'
        );
      console.log('wrong inputs data');
    } else {
      sharp(input)
        .resize(height, width)
        .toFile(outputFull)
        .then(async () => {
          const newImage = await outputFull;
          res.sendFile(newImage);
          console.log('new image has been processed');
        });
    }
  } catch (error) {
    res.send('error');
  }
};
export default mainFunction;
