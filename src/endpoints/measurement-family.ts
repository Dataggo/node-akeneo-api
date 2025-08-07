import {AxiosInstance} from 'axios';
import {ListResponse, MeasurementFamily} from '../types';
import raw from './raw';

/**
 * @see https://api.akeneo.com/api-reference.html#measurement_families_get_list
 */

// eslint-disable-next-line import/prefer-default-export
export const getAll = (
  http: AxiosInstance
): Promise<ListResponse<MeasurementFamily>> =>
  raw.get(http, `/api/rest/v1/measurement-families`, {
    params: {},
  });
