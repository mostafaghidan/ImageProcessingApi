const wrongDimensions = (height: number, width: number): boolean => {
  if (
    (height || width) <= 0 ||
    !Number.isInteger(width) ||
    !Number.isInteger(height) ||
    isNaN(height || width) ||
    !height ||
    !width
  ) {
    return true;
  } else {
    return false;
  }
};

export default wrongDimensions;
