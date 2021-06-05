import React from 'react'
import Link from 'next/link'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Url } from '@/types'

type Props = {
  buttonText: string
  urls: Url[]
}

const DropdownMenu: React.FC<Props> = ({ buttonText, urls }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <button
        data-testid="blog-nav"
        className="text-primary-main hover:text-primary-variant px-3 py-2"
        onClick={handleMenu}
      >
        {buttonText}
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
        {urls.map((url) => (
          <MenuItem key={url.path} onClick={handleClose}>
            <Link href={url.path}>
              <a>{url.text}</a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default DropdownMenu
