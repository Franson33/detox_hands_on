import { API_KEY, BASE_URL } from '@api';

export const GET = async (url: string) => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;

  const response = await fetch(API_URL, { method: 'GET' });
  return response.json();
};
