import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>Something about me!</h1>
      <Link href="/blogs">
        <a>Read my blogs</a>
      </Link>
    </>
  )
}