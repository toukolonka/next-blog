import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogForm from './BlogForm';
import Me from '../../images/Me.png';
import Eiffel from '../../images/Eiffel.png';

async function getBlogs() {
  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/blogs/records',
    { cache: 'no-store' },
  );
  const data = await response.json();

  return data?.items as any[];
}

function Blog({ blog }: any) {
  const {
    id, name, content, author, created,
  } = blog || {};

  return (
    <div className="max-w-xl w-full flex mx-auto my-2">
      <Link href={`/blogs/${id}`}>
        <div className="flex">
          <div className="h-auto w-48 flex-none bg-cover rounded-t-none rounded-l text-center overflow-hidden" title="Woman holding a mug">
            <Image src={Eiffel} alt="Empty image" width={500} height={500} priority />
          </div>
          <div className="bg-white dark:bg-gray-500 rounded-b-none rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-700 dark:text-white text-base">{content}</p>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 mr-4 overflow-hidden rounded-full">
                <Image className="-mt-2" src={Me} alt="Empty image" width={50} height={50} priority />
              </div>
              <div className="text-sm">
                <p className="text-gray-900 dark:text-white leading-none">{author}</p>
                <p className="text-gray-600 dark:text-slate-200">{created}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
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
      <BlogForm />
    </>
  );
}

export default BlogsPage;
