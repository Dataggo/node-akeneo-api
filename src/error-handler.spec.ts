import { AxiosError } from 'axios';
import errorHandler from './error-handler';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockError from '../mocks/error.mock';

describe('errorHandler', () => {
  test('Throws well formed error', async () => {
    const errorMock: AxiosError = {
      isAxiosError: true,
      name: '',
      message: '',
      response: {
        status: 400,
        statusText: 'Bad request',
        data: {
          code: 400,
          message: 'Search query parameter should be valid JSON.',
        },
        headers: {},
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config: {},
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config: {},
      toJSON: (): any => ({}),
    };

    expect(() => errorHandler(errorMock)).toThrow(
      new Error(JSON.stringify(mockError.response, null, '  ')),
    );
  });

  test('Throws well formed error with Authorization', async () => {
      const errorMock: AxiosError = {
      isAxiosError: true,
      name: '',
      message: '',
      response: {
        status: 400,
        statusText: 'Bad request',
        data: {
          code: 400,
          message: 'Search query parameter should be valid JSON.',
        },
        headers: {},
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config: {},
      },
      config: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        headers: {
          Authorization: 'test-authorization',
        },
      },
      toJSON: (): any => ({}),
    };

    expect(() => errorHandler(errorMock)).toThrow(
      new Error(
        JSON.stringify(
          {
            status: 400,
            statusText: 'Bad request',
            message: 'Search query parameter should be valid JSON.',
            details: {},
            request: {
              headers: {
                Authorization: 'Bearer ...ation',
              },
            },
          },
          null,
          '  ',
        ),
      ),
    );
  });
});
