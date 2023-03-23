import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className='flex justify-around m-2 w-full'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About Me</Link>
    </nav>
  );
}
