import React from 'react';

async function getBlog(blogId: string) {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/blogs/records/${blogId}`,
    {
      next: { revalidate: 10 },
    },
  );
  const data = await response.json();

  return data;
}

async function BlogPage({ params }: any) {
  const blog = await getBlog(params.id);
  return (
    <>
      <h1 className="text-center">{blog.name}</h1>
      <p className="text-center whitespace-pre-line">{blog.content}</p>
    </>
  );
}

export default BlogPage;
