import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockResponse from '../../mocks/reference-entity.mock';

import { get, getRecords } from './reference-entity';

const axiosGetSpy = jest.spyOn(axios, 'get');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Reference Entity', () => {
  test('get', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.get }),
    );

    const { items } = await get(axios, {});
    expect(axios.get).toBeCalledWith('/api/rest/v1/reference-entities', {});
    expect(items).toHaveLength(1);
  });

  test('getRecords', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.get }),
    );

    const { items } = await getRecords(axios, {
      referenceEntityCode: 'testcode',
    });
    expect(axios.get).toBeCalledWith(
      '/api/rest/v1/reference-entities/testcode/records',
      {},
    );
    expect(items).toHaveLength(1);
  });
});
