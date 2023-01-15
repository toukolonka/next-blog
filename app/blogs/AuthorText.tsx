import React from 'react';
import Image from 'next/image';
import Me from '../../public/images/Me.png';

function AuthorText({ author, created }: any) {
  return (
    <div className="flex items-center">
      <div className="h-12 w-12 mr-4 overflow-hidden rounded-full">
        <Image className="-mt-2" src={Me} alt="Empty image" width={50} height={50} priority />
      </div>
      <div className="text-sm">
        <p className="text-gray-900 dark:text-white leading-none">{author}</p>
        <p className="text-gray-600 dark:text-slate-200">{created}</p>
      </div>
    </div>
  );
}

export default AuthorText;
