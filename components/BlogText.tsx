/* eslint-disable react/require-default-props */
import React from 'react';
import { Blog } from '../models/Blog';

type BlogTextProps = {
  blog: Blog,
  fullText?: boolean,
};

function BlogText({ blog, fullText = false }: BlogTextProps) {
  const {
    name, content, previewText,
  } = blog || {};

  return (
    <div className="mb-8">
      <div className="text-gray-900 dark:text-white font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 dark:text-white text-base">{fullText ? content : previewText}</p>
    </div>
  );
}

export default BlogText;
