import { createClient, createAppClient } from './index';

const mockConnectionParams = {
  url: 'https://mockdata.com',
  username: 'username',
  password: 'password',
  clientId: 'clientId',
  secret: 'secret',
};

const mockAppParams = {
  url: 'https://mockdata.com',
  accessToken: 'token',
};

test('createClient', () => {
  const mockClient = createClient(mockConnectionParams);
  expect(mockClient).toBeDefined();
});

test('createAppClient', () => {
  const mockClient = createAppClient(mockAppParams);
  expect(mockClient).toBeDefined();
});

test('basic again', () => {
  expect(1 + 2).toBe(3);
});
