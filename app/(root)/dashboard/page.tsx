"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'Admin One', email: 'admin1@example.com' },
    { id: 2, name: 'Admin Two', email: 'admin2@example.com' },
  ]);

  const [newAdmin, setNewAdmin] = useState({ name: '', email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin({ ...newAdmin, [name]: value });
  };

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    setAdmins([...admins, { id: admins.length + 1, ...newAdmin }]);
    setNewAdmin({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

        {/* Admins List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Admins</h2>
          <ul className="space-y-4">
            {admins.map(admin => (
              <li key={admin.id} className="bg-gray-700 p-4 rounded-md text-white">
                <p><strong>Name:</strong> {admin.name}</p>
                <p><strong>Email:</strong> {admin.email}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Admin Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Add New Admin</h2>
          <form onSubmit={handleAddAdmin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={newAdmin.name}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
                placeholder="Enter admin name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={newAdmin.email}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
                placeholder="Enter admin email"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Add Admin
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;