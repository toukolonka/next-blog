import React from 'react';
import Image from 'next/image';
import BlogText from './BlogText';
import AuthorText from './AuthorText';
import { Blog } from '../models/Blog';

type BlogCardProps = {
  blog: Blog,
};

function BlogCard({ blog }: BlogCardProps) {
  const { id } = blog || {};

  const imageName = blog.images;
  const url = `http://localhost:8090/api/files/blogs/${id}/${imageName}`;

  return (
    <div className="flex w-full">
      <div className="h-auto w-48 flex-none bg-cover rounded-l text-center overflow-hidden hidden sm:block">
        <Image src={url} alt="Blog image" width={500} height={500} priority />
      </div>
      <div className="p-4 flex flex-col justify-between leading-normal w-full">
        <BlogText blog={blog} />
        <AuthorText author={blog.author} created={blog.created} />
      </div>
    </div>
  );
}

export default BlogCard;
