export const destroySession = async () => {
  await fetch('http://localhost:3000/api/session/destroy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: null,
  });
};
