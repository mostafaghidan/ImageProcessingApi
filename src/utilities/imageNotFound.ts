import fs from 'fs';
import path from 'path';
const imageNameNotFound = (filename: string): boolean => {
  if (fs.existsSync(path.resolve(__dirname, `../../public/${filename}.jpg`))) {
    return true;
  } else {
    return false;
  }
};
export default imageNameNotFound;
