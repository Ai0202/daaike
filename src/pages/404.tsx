import Link from 'next/link'
import React from 'react'

const Custom404: React.FC = () => {
  return (
    <main
      className="
        h-screen w-screen flex justify-center items-center flex-col
        bg-gradient-to-tl from-primary-main to-primary-valiant
        text-primary-text"
    >
      <h1 className="text-6xl">404</h1>
      <Link href="/">
        <a className="text-2xl mt-4 border border-primary-text shadow-md py-2 px-8 rounded-md hover:opacity-70">
          top page
        </a>
      </Link>
    </main>
  )
}

export default Custom404
