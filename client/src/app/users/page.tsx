'use client';

import Link from 'next/link';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '@/types/user';

export default function UserListPage() {
  const queryClient = useQueryClient();

  const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch(`http://localhost:3000/users`);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  };

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  const deleteUser = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Link
        href="/users/create"
        className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create New User
      </Link>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading users</p>}
      <ul className="space-y-4">
        {users?.map((user) => (
          <li key={user.id} className="border p-4 rounded">
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>{user.email}</p>
            <div className="flex gap-2 mt-2">
              <Link href={`/users/${user.id}/edit`} className="text-blue-600">
                Edit
              </Link>
              <button
                onClick={() => deleteUser.mutate(user.id.toString())}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
