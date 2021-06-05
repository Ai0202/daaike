import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import DropdownMenu from '@/components/molecules/DropdownMenu'
import { useAuthUser } from 'next-firebase-auth'
import { adminUrl as url } from '@/constants/url'

import Footer from './Footer'
import Image from 'next/image'

interface TITLE {
  title: string
}
const AdminLayout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  const AuthUser = useAuthUser()

  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="fixed top-0 right-0 left-0 shadow-md z-50">
        <nav className="bg-neutral-main w-screen">
          <div className="flex justify-between items-center px-8 h-14">
            <div>
              <Link href="/">
                <a data-testid="home-nav" className="px-3 py-2">
                  <Image
                    width={48}
                    height={48}
                    src="/images/logo_transparent.png"
                  />
                </a>
              </Link>
            </div>
            <div className="flex space-x-4">
              <DropdownMenu
                buttonText="Portfolio"
                urls={[url.portfolio, url.createPortfolit]}
              />
              <DropdownMenu
                buttonText="Blog"
                urls={[url.blog, url.createBlog]}
              />
              <div>
                <button
                  className="text-primary-main hover:text-primary-variant px-3 py-2"
                  onClick={AuthUser.signOut}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen mt-14">
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default AdminLayout
