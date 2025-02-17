import React from 'react';
import {Button} from '@/components/ui/button';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8">Create Event</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Event Title</label>
            <input
              type="text"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter event title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter event description"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Date</label>
            <input
              type="date"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Location</label>
            <input
              type="text"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter event location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Image URL</label>
            <input
              type="text"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Organizer</label>
            <input
              type="text"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter organizer name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Long Description</label>
            <textarea
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter long description"
              rows={6}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Schedule</label>
            <textarea
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 text-white p-2"
              placeholder="Enter schedule (e.g., 09:00 AM - Registration & Breakfast)"
              rows={4}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;