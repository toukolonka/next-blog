'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function BlogForm() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await fetch('http://127.0.0.1:8090/api/collections/blogs/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });

    setContent('');
    setName('');

    router.refresh();
  };

  return (
    <div className="w-full max-w-lg mx-auto my-8">
      <form onSubmit={create} className="bg-white dark:bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-center text-lg mb-6">Create a new blog</h3>
        <div className="mb-4 mt-1">
          <input
            type="text"
            placeholder="Name"
            value={name}
            id="name"
            className="bg-gray-200 dark:bg-gray-700 shadow border dark:border-none rounded py-2 px-3 w-full focus:outline-none focus:ring-green-500 focus:ring-4"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Content"
            value={content}
            rows={5}
            className="bg-gray-200 dark:bg-gray-700 shadow border dark:border-none rounded py-2 px-3 w-full focus:outline-none focus:ring-green-500 focus:ring-4"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-gray-900 focus:ring-4 transition duration-300"
        >
          Create blog
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
