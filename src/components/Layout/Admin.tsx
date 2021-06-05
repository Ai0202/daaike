import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useAuthUser } from 'next-firebase-auth'
import { adminUrl as url } from '@/constants/url'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import Footer from './Footer'
import Image from 'next/image'

interface TITLE {
  title: string
}
const AdminLayout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  const AuthUser = useAuthUser()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
              <button
                data-testid="blog-nav"
                className="text-primary-main hover:text-primary-variant px-3 py-2"
                onClick={handleMenu}
              >
                Blog
              </button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href={url.blog}>
                    <a>List</a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href={url.createBlog}>
                    <a>create</a>
                  </Link>
                </MenuItem>
              </Menu>
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
