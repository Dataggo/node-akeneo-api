import { path } from 'ramda';
import { AxiosError } from 'axios';

const cleanHeaders = (headers: Record<string, any>) =>
  headers && headers.Authorization
    ? {
        ...headers,
        Authorization: `Bearer ${`...${headers.Authorization.substr(-5)}`}`,
      }
    : headers;

export default function errorHandler({ config, response }: AxiosError): never {
  const data = response?.data;

  const errorData: {
    status?: number;
    statusText?: string;
    requestId?: string;
    message: string;
    details: Record<string, any>;
    request?: Record<string, any>;
  } = {
    status: response?.status,
    statusText: response?.statusText,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    message: data && 'message' in data ? data.message : '',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    details: data && 'details' in data ? data.details : {},
    request: config
      ? {
          url: config.url,
          headers: cleanHeaders(config.headers), // Obscure the Authorization token
          method: config.method,
          payloadData: config.data,
        }
      : {},
  };

  const error = new Error();
  error.name = `${response?.status} ${response?.statusText}`;

  try {
    error.message = JSON.stringify(errorData, null, '  ');
  } catch {
    error.message = path(['message'], errorData) || '';
  }
  throw error;
}
