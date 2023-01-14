import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-200 dark:bg-gray-900 dark:text-white">
        <nav>
          <a href="/">
            Home
          </a>
          <a href="/blogs">
            Blogs
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
