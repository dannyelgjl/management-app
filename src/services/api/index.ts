import axios, { AxiosError } from 'axios';
import { Platform } from 'react-native';

import { environment } from '../../config/environment';
import { ApiErrorEnvelope } from '../types';

const defaultBaseURL = Platform.select({
  android: environment.apiBaseURL.android,
  ios: environment.apiBaseURL.ios,
  default: environment.apiBaseURL.default,
});

export const api = axios.create({
  baseURL: defaultBaseURL,
  timeout: 10_000,
});

export function getApiErrorMessage(error: unknown) {
  const axiosError = error as AxiosError<ApiErrorEnvelope>;
  const apiMessage = axiosError.response?.data?.error?.message;

  if (apiMessage) {
    return apiMessage;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Não foi possível concluir a operação.';
}
