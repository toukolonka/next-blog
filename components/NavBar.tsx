import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className="border-gray-200 py-2.5 rounded dark:bg-gray-900 max-w-xl w-full mx-auto">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Next-Blog-App</span>
        </a>
        <div className="block w-auto" id="navbar-default">
          <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium border-0 dark:bg-gray-900 py-4 px-1">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent hover:scale-110" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/blogs" className="block py-2 pl-3 pr-4 text-gray-700 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent hover:scale-110">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
