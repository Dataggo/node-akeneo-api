import axios from 'axios';
import {createAppHttpClient, createConnectionHttpClient} from "./http-client";

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

describe('http client', () => {
  test('Create Axios connection client', async () => {
    const http = createConnectionHttpClient(mockConnectionParams);
    expect(http).toBeDefined();
  });

  test('Create Axios app client', async () => {
    const http = createAppHttpClient(mockAppParams);
    expect(http).toBeDefined();
  });

  test('Create Axios connection client + request', async () => {
    jest.spyOn(axios, 'post');
    const http = createConnectionHttpClient(mockConnectionParams);
    try {
      await http.get('test');
      // eslint-disable-next-line no-empty
    } catch (error) {}

    expect(axios.post).toHaveBeenCalledWith(
      'https://mockdata.com/api/oauth/v1/token',
      {
        grant_type: 'password',
        password: 'password',
        username: 'username',
      },
      {
        headers: {
          Authorization: 'Basic Y2xpZW50SWQ6c2VjcmV0',
        },
      },
    );
  }, 30000);
});
