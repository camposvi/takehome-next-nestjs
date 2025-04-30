'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import UserForm from '@/components/UserForm';
import { User } from '@/types/user';

export default function EditUserPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const fetchUser = async (): Promise<User> => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    if (!res.ok) throw new Error('Failed to fetch user');
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id],
    queryFn: fetchUser,
  });

  const handleUpdate = async (user: User) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (res.ok) router.push('/users');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Edit User</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading user</p>}
      {data && <UserForm initialData={data} onSubmit={handleUpdate} />}
    </div>
  );
}
