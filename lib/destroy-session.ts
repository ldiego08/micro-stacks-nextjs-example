export const destroySession = async () => {
  await fetch(URL + '/api/session/destroy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: null,
  });
};
