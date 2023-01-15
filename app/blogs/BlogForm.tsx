'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { sleep } from '../utils';

function BlogForm() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [image, setImage] = useState<File | null>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    if (image) {
      formData.append('images', image);
    }

    formData.append('name', name);
    formData.append('content', content);
    formData.append('previewText', previewText);
    formData.append('author', 'Touko Lonka');

    await fetch('http://127.0.0.1:8090/api/collections/blogs/records', {
      method: 'POST',
      body: formData,
    });

    setContent('');
    setName('');
    setPreviewText('');
    setImage(null);

    await sleep(500);
    router.refresh();
  };

  const handleChooseImageClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto my-2">
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
        <div className="mb-2">
          <textarea
            placeholder="Write the content of your blog here"
            value={content}
            rows={5}
            className="bg-gray-200 dark:bg-gray-700 shadow border dark:border-none rounded py-2 px-3 w-full focus:outline-none focus:ring-green-500 focus:ring-4"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Write a short preview for your blog here (max 150 characters)"
            value={previewText}
            rows={3}
            className="bg-gray-200 dark:bg-gray-700 shadow border dark:border-none rounded py-2 px-3 w-full focus:outline-none focus:ring-green-500 focus:ring-4"
            onChange={(e) => setPreviewText(e.target.value)}
          />
        </div>
        <button onClick={handleChooseImageClick} className="inline-block bg-green-500 hover:bg-green-600 dark:bg-gray-700 dark:hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-gray-900 focus:ring-4 transition duration-300" type="button">
          Choose image
        </button>
        {image && (
        <span className="mx-2">
          {image.name}
        </span>
        )}
        <div className="hidden">
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            ref={inputRef}
          />
        </div>
        <button
          type="submit"
          className="block bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-gray-900 focus:ring-4 transition duration-300 mt-4"
        >
          Create blog
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
