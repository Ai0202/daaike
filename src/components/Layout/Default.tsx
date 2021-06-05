import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer'
import Image from 'next/image'
import { url } from '@/constants/url'

interface TITLE {
  title: string
}
const DefaultLayout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
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
              <Link href={url.blog}>
                <a
                  data-testid="blog-nav"
                  className="text-primary-main hover:text-primary-variant px-3 py-2"
                >
                  Blog
                </a>
              </Link>
              <Link href={url.portfolio}>
                <a
                  data-testid="task-nav"
                  className="text-primary-main hover:text-primary-variant px-3 py-2"
                >
                  Portfolio
                </a>
              </Link>
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
export default DefaultLayout
