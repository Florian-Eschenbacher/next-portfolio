import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/about'>About Me</Link>
    </nav>
  );
}
