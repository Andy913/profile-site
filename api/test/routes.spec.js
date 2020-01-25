import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return 200', async () => {
    await request(app).get('/').expect(200);
  });
});

describe('GET /test', () => {
  it('should render properly with valid parameters', async () => {
    await request(app)
      .get('/test')
      .query({ title: 'List title' })
      .expect(200);
  });

  it('should error without a valid parameter', async () => {
    await request(app).get('/test').expect(500);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404);
    await request(app).get('/notfound').expect(404);
  });
});
