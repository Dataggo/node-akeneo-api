import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockFamilyResponse from '../../mocks/measurement-family.mock';

import { getAll } from './measurement-family';

const axiosGetSpy = jest.spyOn(axios, 'get');

afterEach(() => {
  jest.clearAllMocks();
});
describe('Measurement Family', () => {
  test('get all measurement families', async () => {
    axiosGetSpy.mockImplementation(async () =>
      Promise.resolve({ data: mockFamilyResponse.getAll }),
    );

    const { items } = await getAll(axios);
    expect(axios.get).toBeCalledWith('/api/rest/v1/measurement-families', {
      params: {},
    });
    expect(items).toHaveLength(2);
  });
});
