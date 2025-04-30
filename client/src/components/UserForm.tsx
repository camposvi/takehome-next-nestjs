'use client';

import { useState } from 'react';
import { User } from '@/types/user';

type UserFormProps = {
  initialData?: User;
  onSubmit: (user: User) => void;
  isLoading?: boolean;
};

export default function UserForm({
  initialData,
  onSubmit,
  isLoading,
}: UserFormProps) {
  const [formData, setFormData] = useState<User>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    password: initialData?.password || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white shadow rounded-xl max-w-md mx-auto"
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
