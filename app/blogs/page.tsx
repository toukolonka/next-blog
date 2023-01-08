import React from 'react';
import Link from 'next/link';

async function getBlogs() {
  const blogs = [
    {
      id: 1,
      name: 'Hello world',
    },
    {
      id: 2,
      name: 'JS Tutorial',
    },
  ];

  return blogs as any[];
}

function Blog({ blog }: any) {
  const { id, name } = blog || {};

  return (
    <Link className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline" href={`/blogs/${id}`}>
      <div>
        <h2 className="text-center">{name}</h2>
      </div>
    </Link>
  );
}

async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <h1 className="text-center text-2xl mb-5">Blogs</h1>
      <div>
        {blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)}
      </div>
    </>
  );
}

export default BlogsPage;
