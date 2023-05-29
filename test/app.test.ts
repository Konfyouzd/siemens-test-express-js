import express from 'express';
import request from 'supertest';
import baseRouter from '../src/routes/base';
import metadataRouter from '../src/routes/metadata';

// Mock app
const app = express();
app.use(baseRouter);
app.use(metadataRouter);

// Test Siemens Code Project calls to root and make sure it appropriately returns 404s
describe('Siemens Coding Test ExpressJS Application', () => {
  // Test to see if the application responds to calling the base route
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello World!');
  });

  // Test to see if the application responds appropriately to non-existent route calls
  test('responds appropriately with 404', async () => {
    const res = await request(app).get('/nonexistentroute');
    expect(res.statusCode).toBe(404);
  });
});

// Test Siemens Code Project API calls
describe('Siemens Coding Test ExpressJS Application APIs', () => {
  test('responds to /api/metadata', async () => {
    const res = await request(app).get('/api/metadata');
    expect(res.statusCode).toBe(200);
    expect(res.get('Content-Type')).toBe('application/json; charset=utf-8');
    expect(res.text).toBeDefined();
    expect(JSON.parse(res.text)).toBeInstanceOf(Array);
    expect(JSON.parse(res.text).length).toBeGreaterThan(0);
  });
});
