import fs from 'fs';
import path from 'path';
const imageIsExist = (resizedImage: string): boolean => {
  if (
    fs.existsSync(path.resolve(__dirname, `../../thumbnail/${resizedImage}`))
  ) {
    return true;
  } else {
    return false;
  }
};
export default imageIsExist;
