'use server';

export const addUser = async () => {
  await fetch('http://127.0.0.1:4002/api/users', { method: 'POST' });
  return { id: Math.random() };
}