import { API_URL } from './constants';

export const saveSession = async (dehydratedState: string) => {
  await fetch(API_URL + '/api/session/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dehydratedState }),
  });
};
