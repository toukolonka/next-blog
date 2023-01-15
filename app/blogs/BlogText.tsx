import React from 'react';

function BlogText({ blog, fullText }: any) {
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
