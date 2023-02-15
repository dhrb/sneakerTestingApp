import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </header>
        <Outlet />
    </>
  )
}

export default Layout