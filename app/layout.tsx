import React from 'react';
import NavBar from '../components/NavBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-200 dark:bg-gray-900 dark:text-white mx-2">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
