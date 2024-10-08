import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockResponse from '../../mocks/attribute.mock';

import { getOne, get, getAll, getOptions } from './attribute';

const axiosGetSpy = jest.spyOn(axios, 'get');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Attribute', () => {
  test('get attributes', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.get }),
    );

    const { items } = await get(axios, {});
    expect(axios.get).toBeCalledWith('/api/rest/v1/attributes', {
      params: {},
    });
    expect(items).toHaveLength(1);
  });

  test('getOne attribute', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.getOne }),
    );

    const attribute = await getOne(axios, { code: 'test' });
    expect(axios.get).toBeCalledWith('/api/rest/v1/attributes/test', {});
    expect(attribute).toHaveProperty('group');
  });

  test('Get with valid parameters', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.get }),
    );

    await get(axios, {
      query: {
        search: '{"code":[{"operator":"IN","value":["code1","code2"]}]}',
      },
    });

    expect(axios.get).toBeCalledWith('/api/rest/v1/attributes', {
      params: {
        search: '{"code":[{"operator":"IN","value":["code1","code2"]}]}',
      },
    });
  });

  test('getAll', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.getAll }),
    );

    const { items: attributes } = await getAll(axios, {});
    expect(axios.get).toBeCalledWith('/api/rest/v1/attributes', {
      params: {
        limit: 100,
        page: 1,
        with_count: true,
      },
    });
    expect(attributes).toHaveLength(1);
  });

  test('getOptions', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.getAll }),
    );

    const { items: attributes } = await getOptions(axios, {
      attributeCode: 'back_material',
    });
    expect(axios.get).toBeCalledWith(
      '/api/rest/v1/attributes/back_material/options',
      {
        params: {
          limit: 100,
          page: 1,
          with_count: true,
        },
      },
    );
    expect(attributes).toHaveLength(1);
  });

  test('getOptions with params', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockResponse.getAll }),
    );

    const { items: attributes } = await getOptions(axios, {
      attributeCode: 'back_material',
      query: {
        limit: 100,
        page: 1,
        with_count: true,
      },
    });
    expect(axios.get).toBeCalledWith(
      '/api/rest/v1/attributes/back_material/options',
      {
        params: {
          limit: 100,
          page: 1,
          with_count: true,
        },
      },
    );
    expect(attributes).toHaveLength(1);
  });
});
