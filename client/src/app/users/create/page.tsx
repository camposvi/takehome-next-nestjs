'use client';

import { useRouter } from 'next/navigation';
import UserForm from '@/components/UserForm';
import { User } from '@/types/user';

export default function CreateUserPage() {
  const router = useRouter();

  const handleCreate = async (user: User) => {
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (res.ok) router.push('/users');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create User</h1>
      <UserForm onSubmit={handleCreate} />
    </div>
  );
}
