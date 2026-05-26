import { test, expect, request } from '@playwright/test';

test('GET posts API validation', async () => {

  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true
  });

  const response = await apiContext.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);

  expect(responseBody.userId).toBe(1);

});

test('POST create post API validation', async () => {

  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true
  });

  const response = await apiContext.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright API Testing',
        body: 'Learning API automation',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.title).toBe('Playwright API Testing');

});