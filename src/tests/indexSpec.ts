import supertest from 'supertest';
import app from '../index';
const request = supertest(app);
describe('home page route', () => {
  it('should return 200 status code', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
describe('resizing api handles not found name', () => {
  it('should send a not found message and 404 code', async () => {
    const response = await request.get(
      '/resizing/?name=fjd&height=200&width=200'
    );
    expect(response.text).toEqual('Your input file name is not exist');
    expect(response.status).toEqual(404);
  });
});
describe('resizing api handles good request', () => {
  it('should send processed image and 200 ok code', async () => {
    const response = await request.get(
      '/resizing/?name=fjord&height=100&width=100'
    );
    expect(response.status).toEqual(200);
  });
});
