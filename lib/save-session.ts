export const saveSession = async (dehydratedState: string) => {
  await fetch('http://localhost:3000/api/session/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dehydratedState }),
  });
};
