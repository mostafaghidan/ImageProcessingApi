import imageNameNotFound from '../utilities/imageNotFound';
describe('Check image is exist in public folder', () => {
  it('should return true if image name is exist', async () => {
    const result = imageNameNotFound('fjord');
    expect(result).toBe(true);
  });
  it('should return false if image name is not exist', async () => {
    const result = imageNameNotFound('flower');
    expect(result).toBe(false);
  });
});
