import { User } from '@/types/user';

const API = 'http://localhost:3000/users';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(API);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
};

export const createUser = async (user: Required<User>): Promise<User> => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Failed to create user');
  return res.json();
};

export const updateUser = async (
  id: string,
  user: Partial<User>
): Promise<User> => {
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Failed to update user');
  return res.json();
};

export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${API}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete user');
};
