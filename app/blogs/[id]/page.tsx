import React from 'react';
import Image from 'next/image';
import BlogText from '../../../components/BlogText';
import AuthorText from '../../../components/AuthorText';
import { Blog } from '../../../models/Blog';

async function getBlog(blogId: string) {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/blogs/records/${blogId}`,
    {
      next: { revalidate: 10 },
    },
  );
  const blog = (await response.json()) as Blog;

  return blog;
}

async function BlogPage({ params }: any) {
  const blog = await getBlog(params.id);
  const imageName = blog.images;
  const url = `http://localhost:8090/api/files/blogs/${blog.id}/${imageName}`;

  return (
    <div className="max-w-xl w-full mx-auto border border-black dark:border-white mt-2 mb-10 rounded">
      <div className="p-4">
        <BlogText blog={blog} fullText />
      </div>
      <div className="mx-auto mb-8 w-8/12">
        <Image
          src={url}
          alt="Blog image"
          width={400}
          height={600}
          priority
        />
      </div>
      <div className="p-4">
        <AuthorText author={blog.author} created={blog.created} />
      </div>
    </div>
  );
}

export default BlogPage;
