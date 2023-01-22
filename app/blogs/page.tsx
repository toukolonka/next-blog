import React from 'react';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { Blog } from '../../models/Blog';

async function getBlogs() {
  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/blogs/records',
    { cache: 'no-store' },
  );
  const data = await response.json();
  const blogs = data?.items as Blog[];

  return blogs;
}

async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-xl w-full mx-auto mb-8">
      {blogs?.map((blog) => (
        <Link className="w-full" href={`/blogs/${blog.id}`}>
          <div className="max-w-xl w-full flex mx-auto my-2 md:hover:scale-[1.02] bg-white dark:bg-gray-500 md:hover:dark:bg-gray-700 rounded">
            <BlogCard key={blog.id} blog={blog} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogsPage;
